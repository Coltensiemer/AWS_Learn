

const analytics = [
  "Amazon Athena",
  "AWS Data Exchange",
  "Amazon EMR",
  "AWS Glue",
  "Amazon Kinesis",
  "Amazon Managed Streaming for Apache Kafka (Amazon MSK)",
  "Amazon OpenSearch Service",
  "Amazon QuickSight",
  "Amazon Redshift"
];

const applicationIntegration = [
  "Amazon EventBridge",
  "Amazon Simple Notification Service (Amazon SNS)",
  "Amazon Simple Queue Service (Amazon SQS)",
  "AWS Step Functions"
];

const businessApplications = [
  "Amazon Connect",
  "Amazon Simple Email Service (Amazon SES)"
];

const cloudFinancialManagement = [
  "AWS Billing Conductor",
  "AWS Budgets",
  "AWS Cost and Usage Report",
  "AWS Cost Explorer",
  "AWS Marketplace"
];

const compute = [
  "AWS Batch",
  "Amazon EC2",
  "AWS Elastic Beanstalk",
  "Amazon Lightsail",
  "AWS Local Zones",
  "AWS Outposts",
  "AWS Wavelength"
];

const containers = [
  "Amazon Elastic Container Registry (Amazon ECR)",
  "Amazon Elastic Container Service (Amazon ECS)",
  "Amazon Elastic Kubernetes Service (Amazon EKS)"
];

const customerEngagement = [
  "AWS Activate for Startups",
  "AWS IQ",
  "AWS Managed Services (AMS)",
  "AWS Support"
];

const database = [
  "Amazon Aurora",
  "Amazon DynamoDB",
  "Amazon MemoryDB for Redis",
  "Amazon Neptune",
  "Amazon RDS"
];

const developerTools = [
  "AWS AppConfig",
  "AWS CLI",
  "AWS Cloud9",
  "AWS CloudShell",
  "AWS CodeArtifact",
  "AWS CodeBuild",
  "AWS CodeCommit",
  "AWS CodeDeploy",
  "AWS CodePipeline",
  "AWS CodeStar",
  "AWS X-Ray"
];

const endUserComputing = [
  "Amazon AppStream 2.0",
  "Amazon WorkSpaces",
  "Amazon WorkSpaces Web Frontend"
];

const webAndMobile = [
  "AWS Amplify",
  "AWS AppSync",
  "AWS Device Farm"
];

const IoT = [
  "AWS IoT Core",
  "AWS IoT Greengrass"
];
const machineLearning = [
  "Amazon Comprehend",
  "Amazon Kendra",
  "Amazon Lex",
  "Amazon Polly",
  "Amazon Rekognition",
  "Amazon SageMaker",
  "Amazon Textract",
  "Amazon Transcribe",
  "Amazon Translate"
];

const managementAndGovernance = [
  "AWS Auto Scaling",
  "AWS CloudFormation",
  "AWS CloudTrail",
  "Amazon CloudWatch",
  "AWS Compute Optimizer",
  "AWS Config",
  "AWS Control Tower",
  "AWS Health Dashboard",
  "AWS Launch Wizard",
  "AWS License Manager",
  "AWS Management Console",
  "AWS Organizations",
  "AWS Resource Groups and Tag Editor",
  "AWS Service Catalog",
  "AWS Systems Manager",
  "AWS Trusted Advisor",
  "AWS Well-Architected Tool"
];

const migrationAndTransfer = [
  "AWS Application Discovery Service",
  "AWS Application Migration Service",
  "AWS Database Migration Service (AWS DMS)",
  "AWS Migration Hub",
  "AWS Schema Conversion Tool (AWS SCT)",
  "AWS Snow Family",
  "AWS Transfer Family"
];

const networkingAndContentDelivery = [
  "Amazon API Gateway",
  "Amazon CloudFront",
  "AWS Direct Connect",
  "AWS Global Accelerator",
  "Amazon Route 53",
  "Amazon VPC",
  "AWS VPN"
];

const securityIdentityAndCompliance = [
  "AWS Artifact",
  "AWS Audit Manager",
  "AWS Certificate Manager (ACM)",
  "AWS CloudHSM",
  "Amazon Cognito",
  "Amazon Detective",
  "AWS Directory Service",
  "AWS Firewall Manager",
  "Amazon GuardDuty",
  "AWS Identity and Access Management (IAM)",
  "AWS IAM Identity Center (AWS Single Sign-On)",
  "Amazon Inspector",
  "AWS Key Management Service (AWS KMS)",
  "Amazon Macie",
  "AWS Network Firewall",
  "AWS Resource Access Manager (AWS RAM)",
  "AWS Secrets Manager",
  "AWS Security Hub",
  "AWS Shield",
  "AWS WAF"
];

const serverless = [
  "AWS Fargate",
  "AWS Lambda"
];

const storage = [
  "AWS Backup",
  "Amazon Elastic Block Store (Amazon EBS)",
  "Amazon Elastic File System (Amazon EFS)",
  "AWS Elastic Disaster Recovery",
  "Amazon FSx",
  "Amazon S3",
  "Amazon S3 Glacier",
  "AWS Storage Gateway"
];


export const QuestionTags = [
  ["Analytics", ...analytics],
  ["Application Integration", ...applicationIntegration],
  ["Business Applications", ...businessApplications],
  ["Cloud Financial Management", ...cloudFinancialManagement],
  ["Compute", ...compute],
  ["Containers", ...containers],
  ["Customer Engagement", ...customerEngagement],
  ["Database", ...database],
  ["Developer Tools", ...developerTools],
  ["End User Computing", ...endUserComputing],
  ["Web and Mobile", ...webAndMobile],
  ["IoT", ...IoT],
  ["Machine Learning", ...machineLearning],
  ["Management and Governance", ...managementAndGovernance],
  ["Migration and Transfer", ...migrationAndTransfer],
  ["Networking and Content Delivery", ...networkingAndContentDelivery],
  ["Security, Identity, and Compliance", ...securityIdentityAndCompliance],
  ["Serverless", ...serverless],
  ["Storage", ...storage]
];


