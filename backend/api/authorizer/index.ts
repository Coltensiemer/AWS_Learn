// import {
// 	APIGatewayAuthorizerEvent,
// 	APIGatewayAuthorizerResult,
// 	Context,
// } from 'aws-lambda';

// // Generate an IAM policy document
// const generateAuthResponse = (
// 	principalId: string,
// 	effect: string,
// 	resource: string
// ): APIGatewayAuthorizerResult => {
// 	const policyDocument = {
// 		Version: '2012-10-17',
// 		Statement: [
// 			{
// 				Action: 'execute-api:Invoke',
// 				Effect: effect,
// 				Resource: resource,
// 			},
// 		],
// 	};

// 	return {
// 		principalId,
// 		policyDocument,
// 	};
// };

// export const handler = async (
// 	event: APIGatewayAuthorizerEvent,
// 	context: Context
// ): Promise<APIGatewayAuthorizerResult> => {
// 	// Extract the header you want to evaluate
// 	const headerValue = event.headers['x-custom-header']; // Replace 'x-custom-header' with your header name

// 	const methodArn = event.methodArn;

// 	if (headerValue === 'approve') {
// 		// Generate an allow policy if the header matches 'approve'
// 		return generateAuthResponse('user', 'Allow', methodArn);
// 	} else {
// 		// Generate a deny policy if the header does not match 'approve'
// 		return generateAuthResponse('user', 'Deny', methodArn);
// 	}
// };
// // // Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// // SPDX-License-Identifier: MIT-0
import {
  APIGatewayTokenAuthorizerEvent,
  Context,
  APIGatewayAuthorizerResult,
} from 'aws-lambda';

import {
  CognitoJwtVerifier,
} from 'aws-jwt-verify';

/*
 * Section 1: Authorization policy helper classes
 */
const userPoolId = process.env.USER_POOL_ID || '';
const appClientId = process.env.APPLICATION_CLIENT_ID || '';
const adminGroupName = process.env.ADMIN_GROUP_NAME;

const HttpVerb = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  HEAD: "HEAD",
  DELETE: "DELETE",
  OPTIONS: "OPTIONS",
  ALL: "*"
};

interface Statement {
  Effect: string;
  Action: string[];
  Resource: Array<string>;
  Condition: { [key: string]: any };
}

/**
 * @property {string} awsAccountId - The AWS account id the policy will be
 * generated for. This is used to create the method ARNs.
 * @property {string} principalId - The principal used for the policy, this
 * should be a unique identifier for the end user.
 * @property {string} version - CloudFormation version.
 * @property {string} pathRegex - The regex used to validate resource paths for the policy.
 * @property {list} allowMethods - The methods to allow for the policy.
 * @property {list} denyMethods - The methods to deny for the policy.
 * @property {string} restApiId - The API Gateway id to be used in the policy.
 * Beware of using '*' since it will not simply mean any API Gateway API id,
 * because stars will greedily expand over '/' or other separators. See
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_resource.html
 * for more details.
 * @property {string} region - The region to be used in the policy. Beware of
 * using '*' since it will not simply mean any region, because stars will
 * greedily expand over '/' or other separators.
 * @property {string} stage - The stage to be used in the policy. Beware of
 * using '*' since it will not simply mean any stage, because stars will
 * greedily expand over '/' or other separators.
 */
class AuthPolicy {
  awsAccountId: string;
  principalId: string;
  version: string;
  pathRegex: RegExp;
  allowMethods: { resourceArn: string; conditions: any }[];
  denyMethods: { resourceArn: string; conditions: any }[];
  restApiId: string;
  region: string;
  stage: string;

  constructor(principal: string, awsAccountId: string, apiOptions: any) {
    this.awsAccountId = awsAccountId;
    this.principalId = principal;
    this.version = "2012-10-17";
    this.pathRegex = new RegExp('^[/.a-zA-Z0-9-\*]+$');
    this.allowMethods = [];
    this.denyMethods = [];
    this.restApiId = apiOptions?.restApiId || "<<restApiId>>";
    this.region = apiOptions?.region || "<<region>>";
    this.stage = apiOptions?.stage || "<<stage>>";
  }

  /**
   * Adds a '*' allow to the policy to authorize access to all methods of an API.
   */
  allowAllMethods(): void {
    this.addMethod("allow", "*", "*", null);
  }

  /**
   * Adds a '*' allow to the policy to deny access to all methods of an API.
   */
  denyAllMethods(): void {
    this.addMethod("deny", "*", "*", null);
  }

  /**
   * Adds an API Gateway method (Http verb + Resource path) to the list of
   * allowed methods for the policy.
   *
   * @param {String} verb - HTTP verb for the method, this should ideally come
   * from * the * AuthPolicy.HttpVerb object to avoid spelling mistakes.
   * @param {string} resource - Resource path, ror example '/users'.
   */
  allowMethod(verb: string, resource: string): void {
    this.addMethod("allow", verb, resource, null);
  }

  /**
   * Adds an API Gateway method (Http verb + Resource path) to the list of
   * denied methods for the policy.
   *
   * @param {String} verb - HTTP verb for the method, this should ideally come
   * from * the * AuthPolicy.HttpVerb object to avoid spelling mistakes.
   * @param {string} resource - Resource path, for example '/users'.
   */
  denyMethod(verb: string, resource: string): void {
    this.addMethod("deny", verb, resource, null);
  }

  /**
   * Adds an API Gateway method (Http verb + Resource path) to the list of
   * allowed methods and includes a condition for the policy statement. More on
   * AWS policy conditions here:
   * http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Condition
   *
   * @param {String} verb - HTTP verb for the method, this should ideally come
   * from * the * AuthPolicy.HttpVerb object to avoid spelling mistakes.
   * @param {string} resource - Resource path, ror example '/users'.
   * @param {Object} conditions - Object in the format specified by the AWS docs.
   */
  allowMethodWithConditions(verb: string, resource: string, conditions: any): void {
    this.addMethod("allow", verb, resource, conditions);
  }

  /**
   * Adds an API Gateway method (Http verb + Resource path) to the list of
   * denied methods and includes a condition for the policy statement. More on
   * AWS policy conditions here:
   * http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Condition
   *
   * @param {String} verb - HTTP verb for the method, this should ideally come
   * from * the * AuthPolicy.HttpVerb object to avoid spelling mistakes.
   * @param {string} resource - Resource path, ror example '/users'.
   * @param {Object} conditions - Object in the format specified by the AWS docs.
   */
  denyMethodWithConditions(verb: string, resource: string, conditions: any): void {
    this.addMethod("deny", verb, resource, conditions);
  }

  /**
   * Generates the policy document based on the internal lists of allowed and
   * denied conditions. This will generate a policy with two main statements for
   * the effect, one statement for Allow, and one statement for Deny. Methods
   * that includes conditions will have their own statement in the policy.
   * @returns policy
   */
  build(): APIGatewayAuthorizerResult {
    if (this.allowMethods.length === 0 && this.denyMethods.length === 0) {
      throw new Error("No statements defined for the policy");
    }

    var statement: any = [];
    statement = statement.concat(this.getStatementsForEffect("Allow", this.allowMethods));
    statement = statement.concat(this.getStatementsForEffect("Deny", this.denyMethods));

    return {
      principalId: this.principalId,
      policyDocument: {
        Version: this.version,
        Statement: statement
      }
    };
  }

  private addMethod(effect: string, verb: string, resource: string, conditions: any): void {
    if (verb != "*" && !HttpVerb.hasOwnProperty(verb)) {
        throw new Error("Invalid HTTP verb " + verb + ". Allowed verbs in HttpVerb");
    }

    if (!this.pathRegex.test(resource)) {
      throw new Error("Invalid resource path: " + resource + ". Path should match " + this.pathRegex);
    }

    const cleanedResource = resource.startsWith("/") ? resource.substring(1) : resource;
    const resourceArn = `arn:aws:execute-api:${this.region}:${this.awsAccountId}:${this.restApiId}/${this.stage}/${verb}/${cleanedResource}`;

    if (effect.toLowerCase() == "allow") {
      this.allowMethods.push({
        resourceArn: resourceArn,
        conditions: conditions
      });
    } else if (effect.toLowerCase() == "deny") {
      this.denyMethods.push({
        resourceArn: resourceArn,
        conditions: conditions
      })
    }
  }

  private getStatementsForEffect(effect: string, methods: { resourceArn: string; conditions: any }[]): Statement[] {
    const statements: any[] = [];

    if (methods.length > 0) {
      const statement = this.getEmptyStatement(effect);

      for (const curMethod of methods) {
        if (curMethod.conditions === null || curMethod.conditions.length === 0) {
          statement.Resource.push(curMethod.resourceArn);
        } else {
          const conditionalStatement = this.getEmptyStatement(effect);
          conditionalStatement.Resource.push(curMethod.resourceArn);
          conditionalStatement.Condition = curMethod.conditions;
          statements.push(conditionalStatement);
        }
      }

      if (statement.Resource !== null && statement.Resource.length > 0) {
        statements.push(statement);
      }
    }

    return statements;
  }

  private getEmptyStatement(effect: string): Statement {
    const statement: any = {};
    statement.Action = "execute-api:Invoke";
    statement.Effect = effect.substring(0, 1).toUpperCase() + effect.substring(1).toLowerCase();
    statement.Resource = [];

    return statement;
  }
}

export const handler = (event: APIGatewayTokenAuthorizerEvent, context: Context): Promise<APIGatewayAuthorizerResult> => {
  /*
   * Section 2: Base setup & token validation
   */
  const apiOptions: any = {};
  const tmp = event.methodArn.split(':');
  const apiGatewayArnTmp = tmp[5].split('/');
  const awsAccountId = tmp[4];
  apiOptions.region = tmp[3];
  apiOptions.restApiId = apiGatewayArnTmp[0];
  apiOptions.stage = apiGatewayArnTmp[1];

  const jwtToken: string = event['authorizationToken'];
  const verifier = CognitoJwtVerifier.create({
    userPoolId,
    tokenUse: 'id',
    clientId: appClientId
  });

  // Validate JWT token
  return verifier.verify(jwtToken)
    .then(result => {
    /*
     * Section 3: Authorization rules
     */
    const principalId = result.sub;
    const policy = new AuthPolicy(principalId, awsAccountId, apiOptions);

    // Allow all public resources/methods explicitly
    policy.allowMethod(HttpVerb.GET, `/users/${principalId}`)
    policy.allowMethod(HttpVerb.GET, `/users/${principalId}/*`)
    policy.allowMethod(HttpVerb.PUT, `/users/${principalId}`)
    policy.allowMethod(HttpVerb.PUT, `/users/${principalId}/*`)
    policy.allowMethod(HttpVerb.DELETE, `/users/${principalId}`)
    policy.allowMethod(HttpVerb.DELETE, `/users/${principalId}/*`)

    // Look for admin group in Cognito groups
    // Assumption: admin group always has higher precedence
    if (result["cognito:groups"] && result['cognito:groups'][0] === adminGroupName) {
      // add administrative privileges
      policy.allowMethod(HttpVerb.POST, "users")
      policy.allowMethod(HttpVerb.POST, "users/*")
      policy.allowMethod(HttpVerb.GET, "users")
      policy.allowMethod(HttpVerb.GET, "users/*")
      policy.allowMethod(HttpVerb.PUT, "users")
      policy.allowMethod(HttpVerb.PUT, "users/*")
      policy.allowMethod(HttpVerb.DELETE, "users")
      policy.allowMethod(HttpVerb.DELETE, "users/*")
    }

    return policy.build();
  }).catch(error => {
    console.log(error);

    throw new Error('Unauthorized');
  });
}
