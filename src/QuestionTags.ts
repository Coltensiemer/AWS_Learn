

const analytics = [
  "Amazon Athena",
  "AWS Data Exchange",
  "Amazon EMR",
  "AWS Glue",
  "Amazon Kinesis",
  "Amazon Managed Streaming for Apache Kafka (Amazon MSK)",
  "Amazon OpenSearch Service",
  "Amazon QuickSight",
  "Amazon Redshift",
  "Best Practices"
];

const applicationIntegration = [
  "Amazon EventBridge",
  "Amazon Simple Notification Service (Amazon SNS)",
  "Amazon Simple Queue Service (Amazon SQS)",
  "AWS Step Functions",
  "Best Practices"
];

const businessApplications = [
  "Amazon Connect",
  "Amazon Simple Email Service (Amazon SES)",
  "Best Practices",
];

const cloudFinancialManagement = [
  "AWS Billing Conductor",
  "AWS Budgets",
  "AWS Cost and Usage Report",
  "AWS Cost Explorer",
  "AWS Marketplace",
  "Best Practices"
];

const compute = [
  "AWS Batch",
  "Amazon EC2",
  "AWS Elastic Beanstalk",
  "Amazon Lightsail",
  "AWS Local Zones",
  "AWS Outposts",
  "AWS Wavelength",
  "Best Practices"
];

const containers = [
  "Amazon Elastic Container Registry (Amazon ECR)",
  "Amazon Elastic Container Service (Amazon ECS)",
  "Amazon Elastic Kubernetes Service (Amazon EKS)",
  "Best Practices",
];

const customerEngagement = [
  "AWS Activate for Startups",
  "AWS IQ",
  "AWS Managed Services (AMS)",
  "AWS Support",
  "Best Practices"
];

const database = [
  "Amazon Aurora",
  "Amazon DynamoDB",
  "Amazon MemoryDB for Redis",
  "Amazon Neptune",
  "Amazon RDS",
  "Amazon ElastiCache",
  "Best Practices"
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
  "AWS X-Ray",
  "Best Practices"
];

const endUserComputing = [
  "Amazon AppStream 2.0",
  "Amazon WorkSpaces",
  "Amazon WorkSpaces Web Frontend",
  "Best Practices"
];

const webAndMobile = [
  "AWS Amplify",
  "AWS AppSync",
  "AWS Device Farm",
  "Best Practices"
];

const IoT = [
  "AWS IoT Core",
  "AWS IoT Greengrass",
  "Best Practices"
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
  "Amazon Translate",
  "Best Practices"
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
  "AWS Well-Architected Tool",
  "AWS Quick Start",
  "Technical Account Manager (TAM)", 
  "APN Technology Partners",
  "Best Practices"
];

const migrationAndTransfer = [
  "AWS Application Discovery Service",
  "AWS Application Migration Service",
  "AWS Database Migration Service (AWS DMS)",
  "AWS Migration Hub",
  "AWS Schema Conversion Tool (AWS SCT)",
  "AWS Snow Family",
  "AWS Transfer Family",
  "Best Practices"
];

const networkingAndContentDelivery = [
  "Amazon API Gateway",
  "Amazon CloudFront",
  "AWS Direct Connect",
  "AWS Global Accelerator",
  "Amazon Route 53",
  "Amazon VPC",
  "AWS VPN",
  "Best Practices"
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
  "AWS WAF",
  "Best Practices",
  "AWS MFA"
];

const serverless = [
  "AWS Fargate",
  "AWS Lambda",
  "Best Practices"
];

const storage = [
  "AWS Backup",
  "Amazon Elastic Block Store (Amazon EBS)",
  "Amazon Elastic File System (Amazon EFS)",
  "AWS Elastic Disaster Recovery",
  "Amazon FSx",
  "Amazon S3",
  "Amazon S3 Glacier",
  "AWS Storage Gateway",
  "Best Practices"
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


