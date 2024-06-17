//// TRUE PRODUCTION QUESTIONS ////
[
  {
  "id": 2,
  "tag": "Management and Governance",
  "sub_tag": "AWS Management Console",
  "question": "AWS allows users to manage their resources using a web-based user interface. What is the name of this interface?",
  "options": [
    { "value": "A. AWS CLI", "isCorrect": false },
    { "value": "B. AWS API", "isCorrect": false },
    { "value": "C. AWS SDK", "isCorrect": false },
    { "value": "D. AWS Management Console", "isCorrect": true }
  ],
  "correct_answer": ["D"]
}, 
{
  "id": 3,
  "tag": "Compute",
  "sub_tag": "Horizontal Scaling",
  "question": "Which of the following is an example of horizontal scaling in the AWS Cloud?",
  "options": [
    { "value": "A. Replacing an existing EC2 instance with a larger, more powerful one.", "isCorrect": false },
    { "value": "B. Increasing the compute capacity of a single EC2 instance to address the growing demands of an application.", "isCorrect": false },
    { "value": "C. Adding more RAM capacity to an EC2 instance.", "isCorrect": false },
    { "value": "D. Adding more EC2 instances of the same size to handle an increase in traffic.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 4,
  "tag": "Management and Governance",
  "sub_tag": "AWS CloudTrail",
  "question": "You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?",
  "options": [
    { "value": "A. Amazon Inspector.", "isCorrect": false },
    { "value": "B. AWS CloudTrail.", "isCorrect": true },
    { "value": "C. AWS Trusted Advisor.", "isCorrect": false },
    { "value": "D. EC2 Instance Usage Report.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},{
  "id": 5,
  "tag": "Management and Governance",
  "sub_tag": "Reliability",
  "question": "Which of the below options are related to the reliability of AWS? (Choose TWO)",
  "options": [
    { "value": "A. Applying the principle of least privilege to all AWS resources.", "isCorrect": false },
    { "value": "B. Automatically provisioning new resources to meet demand.", "isCorrect": false },
    { "value": "C. All AWS services are considered Global Services, and this design helps customers serve their international users.", "isCorrect": false },
    { "value": "D. Providing compensation to customers if issues occur.", "isCorrect": false },
    { "value": "E. Ability to recover quickly from failures.", "isCorrect": true }
  ],
  "correct_answer": ["E"]
},
{
  "id": 6,
  "tag": "Security, Identity, and Compliance",
  "sub_tag": "AWS Shared Responsibility Model",
  "question": "Which statement is true regarding the AWS Shared Responsibility Model?",
  "options": [
    { "value": "A. Responsibilities vary depending on the services used.", "isCorrect": true },
    { "value": "B. Security of the IaaS services is the responsibility of AWS.", "isCorrect": false },
    { "value": "C. Patching the guest OS is always the responsibility of AWS.", "isCorrect": false },
    { "value": "D. Security of the managed services is the responsibility of the customer.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 7,
  "tag": "Cloud Financial Management",
  "sub_tag": "Reserved Instances, Consolidated Billing",
  "question": "You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?",
  "options": [
    { "value": "A. The Reserved Instance discounts can only be shared with the master account.", "isCorrect": false },
    { "value": "B. All accounts can receive the hourly cost benefit of the Reserved Instances.", "isCorrect": true },
    { "value": "C. The purchased instances will have better performance than On-demand instances.", "isCorrect": false },
    { "value": "D. There are no cost benefits from using consolidated billing; It is for informational purposes only.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 8,
  "tag": "Compute",
  "sub_tag": "High Availability",
  "question": "A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?",
  "options": [
    { "value": "A. Deploy the application across multiple Availability Zones and Edge locations.", "isCorrect": false },
    { "value": "B. Deploy the application across multiple Availability Zones and subnets.", "isCorrect": false },
    { "value": "C. Deploy the application across multiple Regions and Availability Zones.", "isCorrect": true },
    { "value": "D. Deploy the application across multiple VPC’s and subnets.", "isCorrect": false }
  ],
  "correct_answer": ["C"]
},
{
  "id": 9,
  "tag": "Migration and Transfer",
  "sub_tag": "Data Transfer, Hybrid Cloud",
  "question": "What does AWS Snowball provide? (Choose TWO)",
  "options": [
    { "value": "A. Built-in computing capabilities that allow customers to process data locally.", "isCorrect": false },
    { "value": "B. A catalog of third-party software solutions that customers need to build solutions and run their businesses.", "isCorrect": false },
    { "value": "C. A hybrid cloud storage between on-premises environments and the AWS Cloud.", "isCorrect": false },
    { "value": "D. An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS.", "isCorrect": true },
    { "value": "E. Secure transfer of large amounts of data into and out of the AWS.", "isCorrect": true }
  ],
  "correct_answer": ["D, E"]
},
{
  "id": 10,
  "tag": "Management and Governance",
  "sub_tag": "Support Services",
  "question": "A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?",
  "options": [
    { "value": "A. AWS Health Dashboard.", "isCorrect": false },
    { "value": "B. AWS Support Concierge.", "isCorrect": true },
    { "value": "C. AWS Customer Service.", "isCorrect": false },
    { "value": "D. AWS Operations Support.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 11,
  "tag": "Networking and Content Delivery",
  "sub_tag": "Latency Reduction, Global Infrastructure",
  "question": "A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?",
  "options": [
    { "value": "A. Applying the Amazon Connect latency-based routing policy.", "isCorrect": false },
    { "value": "B. Registering a new US domain name to serve the users in the US.", "isCorrect": false },
    { "value": "C. Building a new data center in the US and implementing a hybrid model.", "isCorrect": false },
    { "value": "D. Deploying new Amazon EC2 instances in a Region located in the US.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 12,
  "tag": "Security, Identity, and Compliance",
  "sub_tag": "AWS Identity and Access Management (IAM)",
  "question": "An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?",
  "options": [
    { "value": "A. IAM roles.", "isCorrect": false },
    { "value": "B. IAM users.", "isCorrect": false },
    { "value": "C. IAM user groups.", "isCorrect": true },
    { "value": "D. AWS Organizations.", "isCorrect": false }
  ],
  "correct_answer": ["C"]
},
{
  "id": 13,
  "tag": "Migration and Transfer",
  "sub_tag": "AWS Database Migration Service (AWS DMS)",
  "question": "A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?",
  "options": [
    { "value": "A. AWS OpsWorks.", "isCorrect": false },
    { "value": "B. AWS Database Migration Service.", "isCorrect": true },
    { "value": "C. AWS Server Migration Service.", "isCorrect": false },
    { "value": "D. AWS Application Discovery Service.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 14,
  "tag": "Compute",
  "sub_tag": "Cost Optimization, Elasticity",
  "question": "Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?",
  "options": [
    { "value": "A. Build security in every layer.", "isCorrect": false },
    { "value": "B. Parallelize tasks.", "isCorrect": false },
    { "value": "C. Implement elasticity.", "isCorrect": true },
    { "value": "D. Adopt monolithic architecture.", "isCorrect": false }
  ],
  "correct_answer": ["C"]
},
{
  "id": 15,
  "tag": "Cloud Financial Management",
  "sub_tag": "Benefits of AWS",
  "question": "What are the benefits of having infrastructure hosted in AWS? (Choose TWO)",
  "options": [
    { "value": "A. Increasing speed and agility.", "isCorrect": true },
    { "value": "B. There is no need to worry about security.", "isCorrect": false },
    { "value": "C. Gaining complete control over the physical infrastructure.", "isCorrect": false },
    { "value": "D. Operating applications on behalf of customers.", "isCorrect": false },
    { "value": "E. All of the physical security and most of the data/network security are taken care of for you.", "isCorrect": true }
  ],
  "correct_answer": ["A, E"]
},
{
  "id": 16,
  "tag": "Compute",
  "sub_tag": "Best Practices",
  "question": "What is the advantage of the AWS-recommended practice of 'decoupling' applications?",
  "options": [
    { "value": "A. Allows treating an application as a single, cohesive unit.", "isCorrect": false },
    { "value": "B. Reduces inter-dependencies so that failures do not impact other components of the application.", "isCorrect": true },
    { "value": "C. Allows updates of any monolithic application quickly and easily.", "isCorrect": false },
    { "value": "D. Allows tracking of any API call made to any AWS service.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 17,
  "tag": "Cloud Financial Management",
  "sub_tag": "AWS Cost and Usage Report",
  "question": "Which of the following helps a customer view the Amazon EC2 billing activity for the past month?",
  "options": [
    { "value": "A. AWS Budgets.", "isCorrect": false },
    { "value": "B. AWS Pricing Calculator.", "isCorrect": false },
    { "value": "C. AWS Systems Manager.", "isCorrect": false },
    { "value": "D. AWS Cost & Usage Reports.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 18,
  "tag": "Cloud Financial Management",
  "sub_tag": "Best Practices",
  "question": "What do you gain from setting up consolidated billing for five different AWS accounts under another master account?",
  "options": [
    { "value": "A. AWS services’ costs will be reduced to half the original price.", "isCorrect": false },
    { "value": "B. The consolidated billing feature is just for organizational purpose.", "isCorrect": true },
    { "value": "C. Each AWS account gets volume discounts.", "isCorrect": false },
    { "value": "D. Each AWS account gets five times the free-tier services capacity.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 19,
  "tag": "Storage",
  "sub_tag": "Best Practices",
  "question": "What should you do in order to keep the data on EBS volumes safe? (Choose TWO)",
  "options": [
    { "value": "A. Regularly update firmware on EBS devices.", "isCorrect": false },
    { "value": "B. Create EBS snapshots.", "isCorrect": true },
    { "value": "C. Ensure that EBS data is encrypted at rest.", "isCorrect": true },
    { "value": "D. Store a backup daily in an external drive.", "isCorrect": false },
    { "value": "E. Prevent any unauthorized access to AWS data centers.", "isCorrect": false }
  ],
  "correct_answer": ["B", "C"]
},
{
  "id": 20,
  "tag": "Management and Governance",
  "sub_tag": "",
  "question": "One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture’s design?",
  "options": [
    { "value": "A. By automatically scaling your on-premises resources based on changes in demand.", "isCorrect": false },
    { "value": "B. By automatically scaling your AWS resources using an Elastic Load Balancer.", "isCorrect": false },
    { "value": "C. By reducing interdependencies between application components wherever possible.", "isCorrect": false },
    { "value": "D. By automatically provisioning the required AWS resources based on changes in demand.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 21,
  "tag": "Cloud Financial Management",
  "sub_tag": "AWS Cost and Usage Report",
  "question": "A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000? (Choose TWO)",
  "options": [
    { "value": "A. Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded.", "isCorrect": true },
    { "value": "B. Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis.", "isCorrect": false },
    { "value": "C. Configure the AWS Budgets Service to alert the company when the threshold is exceeded.", "isCorrect": true },
    { "value": "D. Configure AWS CloudTrail to automatically delete all AWS resources when the threshold is exceeded.", "isCorrect": false },
    { "value": "E. Configure the Amazon Connect Service to alert the company when the threshold is exceeded.", "isCorrect": false }
  ],
  "correct_answer": ["A", "C"]
},
{
  "id": 22,
  "tag": "Networking and Content Delivery",
  "sub_tag": "Best Practices",
  "question": "What does Amazon CloudFront use to distribute content to global users with low latency?",
  "options": [
    { "value": "A. AWS Global Accelerator.", "isCorrect": false },
    { "value": "B. AWS Regions.", "isCorrect": false },
    { "value": "C. AWS Edge Locations.", "isCorrect": true },
    { "value": "D. AWS Availability Zones.", "isCorrect": false }
  ],
  "correct_answer": ["C"]
},
{
  "id": 23,
  "tag": "Security, Identity, and Compliance",
  "sub_tag": "Best Practices",
  "question": "What does the 'Principle of Least Privilege' refer to?",
  "options": [
    { "value": "A. You should grant your users only the permissions they need when they need them and nothing more.", "isCorrect": true },
    { "value": "B. All IAM users should have at least the necessary permissions to access the core AWS services.", "isCorrect": false },
    { "value": "C. All trusted IAM users should have access to any AWS service in the respective AWS account.", "isCorrect": false },
    { "value": "D. IAM users should not be granted any permissions; to keep your account safe.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 24,
  "tag": "Compute",
  "sub_tag": "Best Practices",
  "question": "Which of the following does NOT belong to the AWS Cloud Computing models?",
  "options": [
    { "value": "A. Platform as a Service (PaaS).", "isCorrect": false },
    { "value": "B. Infrastructure as a Service (IaaS).", "isCorrect": false },
    { "value": "C. Software as a Service (SaaS).", "isCorrect": false },
    { "value": "D. Networking as a Service (NaaS).", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 25,
  "tag": "Storage",
  "sub_tag": "Amazon S3 Glacier",
  "question": "The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?",
  "options": [
    { "value": "A. S3 Intelligent-Tiering.", "isCorrect": false },
    { "value": "B. AWS Marketplace.", "isCorrect": false },
    { "value": "C. Amazon S3 Glacier Deep Archive.", "isCorrect": true },
    { "value": "D. Amazon EBS.", "isCorrect": false }
  ],
  "correct_answer": ["C"]
},
{
  "id": 26,
  "tag": "Networking and Content Delivery",
  "sub_tag": "Amazon Route 53",
  "question": "Which service provides DNS in the AWS cloud?",
  "options": [
    { "value": "A. Route 53.", "isCorrect": true },
    { "value": "B. AWS Config.", "isCorrect": false },
    { "value": "C. Amazon CloudFront.", "isCorrect": false },
    { "value": "D. Amazon EMR.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 27,
  "tag": "Security, Identity, and Compliance",
  "sub_tag": "AWS Shield",
  "question": "Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? (Choose TWO)",
  "options": [
    { "value": "A. AWS Shield.", "isCorrect": true },
    { "value": "B. AWS Config.", "isCorrect": false },
    { "value": "C. Amazon Cognito.", "isCorrect": false },
    { "value": "D. AWS WAF.", "isCorrect": true },
    { "value": "E. AWS KMS.", "isCorrect": false }
  ],
  "correct_answer": ["A", "D"]
},
  {
    "id": 28,
    "tag": "Storage",
    "sub_tag": "AWS Elastic Disaster Recovery",
    "question": "A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application’s response time is optimal?",
    "options": [
      { "value": "A. AWS OpsWorks.", "isCorrect": false },
      { "value": "B. AWS Storage Gateway.", "isCorrect": false },
      { "value": "C. Amazon EBS volume.", "isCorrect": false },
      { "value": "D. Amazon ElastiCache.", "isCorrect": true }
    ],
    "correct_answer": ["D"]
  },
  {
    "id": 29,
    "tag": "Compute",
    "sub_tag": "Amazon EC2",
    "question": "You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?",
    "options": [
      { "value": "A. Reserved instances.", "isCorrect": false },
      { "value": "B. Spot instances.", "isCorrect": false },
      { "value": "C. Dedicated instances.", "isCorrect": false },
      { "value": "D. On-demand instances.", "isCorrect": true }
    ],
    "correct_answer": ["D"]
  },
  {
    "id": 30,
    "tag": "Compute",
    "sub_tag": "Amazon EC2",
    "question": "You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?",
    "options": [
      { "value": "A. Reserved Instances.", "isCorrect": false },
      { "value": "B. On-demand Instances.", "isCorrect": false },
      { "value": "C. Dedicated Instances.", "isCorrect": false },
      { "value": "D. Spot Instances.", "isCorrect": true }
    ],
    "correct_answer": ["D"]
  },
  {
    "id": 31,
    "tag": "Networking and Content Delivery",
    "sub_tag": "Amazon CloudFront",
    "question": "Which of the following can be described as a global content delivery network (CDN) service?",
    "options": [
      { "value": "A. AWS VPN.", "isCorrect": false },
      { "value": "B. AWS Direct Connect.", "isCorrect": false },
      { "value": "C. AWS Regions.", "isCorrect": false },
      { "value": "D. Amazon CloudFront.", "isCorrect": true }
    ],
    "correct_answer": ["D"]
  },
  {
    "id": 32,
    "tag": "Security, Identity, and Compliance",
    "sub_tag": "AWS Artifact",
    "question": "Which of the following services allows customers to manage their agreements with AWS?",
    "options": [
      { "value": "A. AWS Artifact.", "isCorrect": true },
      { "value": "B. AWS Certificate Manager.", "isCorrect": false },
      { "value": "C. AWS Systems Manager.", "isCorrect": false },
      { "value": "D. AWS Organizations.", "isCorrect": false }
    ],
    "correct_answer": ["A"]
  },
  {
    "id": 33,
    "tag": "Database",
    "sub_tag": "Amazon DynamoDB",
    "question": "Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)",
    "options": [
      { "value": "A. Amazon VPC.", "isCorrect": false },
      { "value": "B. Amazon DynamoDB.", "isCorrect": true },
      { "value": "C. Amazon Elastic MapReduce.", "isCorrect": true },
      { "value": "D. AWS IAM.", "isCorrect": false },
      { "value": "E. Amazon Elastic Compute Cloud.", "isCorrect": false }
    ],
    "correct_answer": ["B", "C"]
  },
  {
    "id": 34,
    "tag": "Database",
    "sub_tag": "Amazon DynamoDB",
    "question": "Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?",
    "options": [
      { "value": "A. Amazon Aurora.", "isCorrect": false },
      { "value": "B. Amazon DynamoDB.", "isCorrect": true },
      { "value": "C. Amazon Elastic Block Store.", "isCorrect": false },
      { "value": "D. Amazon Redshift.", "isCorrect": false }
    ],
    "correct_answer": ["B"]
  },
  {
    "id": 35,
    "tag": "Management and Governance",
    "sub_tag": "Technical Account Manager (TAM)",
    "question": "As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?",
    "options": [
      { "value": "A. AWS Identity and Access Management (IAM) user.", "isCorrect": false },
      { "value": "B. Infrastructure Event Management (IEM) engineer.", "isCorrect": false },
      { "value": "C. AWS Consulting Partners.", "isCorrect": false },
      { "value": "D. Technical Account Manager (TAM).", "isCorrect": true }
    ],
    "correct_answer": ["D"]
  },
  {
    "id": 36,
    "tag": "Cloud Financial Management",
    "sub_tag": "AWS Cost Explorer",
    "question": "How can you view the distribution of AWS spending in one of your AWS accounts?",
    "options": [
      { "value": "A. By using Amazon VPC console.", "isCorrect": false },
      { "value": "B. By contacting the AWS Support team.", "isCorrect": false },
      { "value": "C. By using AWS Cost Explorer.", "isCorrect": true },
      { "value": "D. By contacting the AWS Finance team.", "isCorrect": false }
    ],
    "correct_answer": ["C"]
  },
  {
    "id": 37,
    "tag": "Security, Identity, and Compliance",
    "sub_tag": "AWS Identity and Access Management (IAM)",
    "question": "Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?",
    "options": [
      { "value": "A. Access keys.", "isCorrect": true },
      { "value": "B. Secret token.", "isCorrect": false },
      { "value": "C. UserID.", "isCorrect": false },
      { "value": "D. User name and password.", "isCorrect": false }
    ],
    "correct_answer": ["A"]
  },
  {
    "id": 38,
    "tag": "Customer Engagement",
    "sub_tag": "AWS Support",
    "question": "You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?",
    "options": [
      { "value": "A. Contact the AWS Customer Service team.", "isCorrect": false },
      { "value": "B. Contact the AWS Abuse team.", "isCorrect": true },
      { "value": "C. Contact the AWS Concierge team.", "isCorrect": false },
      { "value": "D. Contact the AWS Security team.", "isCorrect": false }
    ],
    "correct_answer": ["B"]
  },
  {
    "id": 39,
    "tag": "Security, Identity, and Compliance",
    "sub_tag": "Best Practices",
    "question": "Select TWO examples of the AWS shared controls.",
    "options": [
      { "value": "A. Patch Management.", "isCorrect": true },
      { "value": "B. IAM Management.", "isCorrect": false },
      { "value": "C. VPC Management.", "isCorrect": false },
      { "value": "D. Configuration Management.", "isCorrect": true },
      { "value": "E. Data Center operations.", "isCorrect": false }
    ],
    "correct_answer": ["A", "D"]
  },
  {
    "id": 40,
    "tag": "Compute",
    "sub_tag": "Amazon EC2",
    "question": "In order to implement best practices when dealing with a 'Single Point of Failure,' you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)",
    "options": [
      { "value": "A. ELB.", "isCorrect": false },
      { "value": "B. Auto Scaling.", "isCorrect": true },
      { "value": "C. Amazon Athena.", "isCorrect": false },
      { "value": "D. ECR.", "isCorrect": false },
      { "value": "E. Amazon EC2.", "isCorrect": true }
    ],
    "correct_answer": ["B", "E"]
  },
  {
    "id": 41,
    "tag": "Networking and Content Delivery",
    "sub_tag": "Amazon CloudFront",
    "question": "A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?",
    "options": [
      { "value": "A. Amazon SNS.", "isCorrect": false },
      { "value": "B. Amazon Kinesis Video Streams.", "isCorrect": false },
      { "value": "C. AWS CloudFormation.", "isCorrect": false },
      { "value": "D. Amazon CloudFront.", "isCorrect": true }
    ],
    "correct_answer": ["D"]
  },
  {
    "id": 42,
    "tag": "Database",
    "sub_tag": "Amazon Aurora",
    "question": "A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?",
    "options": [
      { "value": "A. A MySQL database installed on an EC2 instance.", "isCorrect": false },
      { "value": "B. Amazon Aurora.", "isCorrect": true },
      { "value": "C. Amazon DynamoDB.", "isCorrect": false },
      { "value": "D. Amazon Neptune.", "isCorrect": false }
    ],
    "correct_answer": ["B"]
  },
  {
    "id": 43,
    "tag": "Management and Governance",
    "sub_tag": "AWS CloudFormation",
    "question": "What is the AWS service that enables AWS architects to manage infrastructure as code?",
    "options": [
      { "value": "A. AWS CloudFormation.", "isCorrect": true },
      { "value": "B. AWS Config.", "isCorrect": false },
      { "value": "C. Amazon SES.", "isCorrect": false },
      { "value": "D. Amazon EMR.", "isCorrect": false }
    ],
    "correct_answer": ["A"]
  },
  {
    "id": 44,
    "tag": "Security, Identity, and Compliance",
    "sub_tag": "Best Practices",
    "question": "Under the shared responsibility model, which of the following is the responsibility of AWS?",
    "options": [
      { "value": "A. Client-side encryption.", "isCorrect": false },
      { "value": "B. Configuring infrastructure devices.", "isCorrect": false },
      { "value": "C. Server-side encryption.", "isCorrect": true },
      { "value": "D. Filtering traffic with Security Groups.", "isCorrect": false }
    ],
    "correct_answer": ["C"]
  },
  {
    "id": 45,
    "tag": "Management and Governance",
    "sub_tag": "AWS Health Dashboard",
    "question": "What does the AWS Health Dashboard provide? (Choose TWO)",
    "options": [
      { "value": "A. Detailed troubleshooting guidance to address AWS events impacting your resources.", "isCorrect": true },
      { "value": "B. Health checks for Auto Scaling instances.", "isCorrect": false },
      { "value": "C. Recommendations for Cost Optimization.", "isCorrect": false },
      { "value": "D. A dashboard detailing vulnerabilities in your applications.", "isCorrect": false },
      { "value": "E. Personalized view of AWS service health.", "isCorrect": true }
    ],
    "correct_answer": ["A", "E"]
  },
  {
    "id": 46,
    "tag": "Management and Governance",
    "sub_tag": "Amazon CloudWatch",
    "question": "You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can’t reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?",
    "options": [
      { "value": "A. AWS Lambda.", "isCorrect": false },
      { "value": "B. AWS Config.", "isCorrect": false },
      { "value": "C. Amazon CloudWatch.", "isCorrect": true },
      { "value": "D. AWS CloudTrail.", "isCorrect": false }
    ],
    "correct_answer": ["C"]
  },
  {
    "id": 47,
    "tag": "Management and Governance",
    "sub_tag": "AWS Trusted Advisor",
    "question": "Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?",
    "options": [
      { "value": "A. AWS Shield.", "isCorrect": false },
      { "value": "B. AWS Management Console.", "isCorrect": false },
      { "value": "C. AWS Secrets Manager.", "isCorrect": false },
      { "value": "D. AWS Trusted Advisor.", "isCorrect": true }
    ],
    "correct_answer": ["D"]
  },
  {
    "id": 48,
    "tag": "Storage",
    "sub_tag": "Amazon S3",
    "question": "Which of the following is not a benefit of Amazon S3? (Choose TWO)",
    "options": [
      { "value": "A. Amazon S3 provides unlimited storage for any type of data.", "isCorrect": false },
      { "value": "B. Amazon S3 can run any type of application or backend system.", "isCorrect": true },
      { "value": "C. Amazon S3 stores any number of objects, but with object size limits.", "isCorrect": false },
      { "value": "D. Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere.", "isCorrect": false },
      { "value": "E. Amazon S3 provides 99.999999999% (11 9’s) of data durability.", "isCorrect": true }
    ],
    "correct_answer": ["B", "E"]
  },
  {
    "id": 49,
    "tag": "Security, Identity, and Compliance",
    "sub_tag": "Best Practices",
    "question": "In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)",
    "options": [
      { "value": "A. Disk disposal.", "isCorrect": false },
      { "value": "B. Controlling physical access to compute resources.", "isCorrect": true },
      { "value": "C. Patching the Network infrastructure.", "isCorrect": false },
      { "value": "D. Setting password complexity rules.", "isCorrect": true },
      { "value": "E. Configuring network access rules.", "isCorrect": false }
    ],
    "correct_answer": ["B", "D"]
  },
  {
    "id": 50,
    "tag": "Management and Governance",
    "sub_tag": "AWS Quick Start",
    "question": "What does AWS provide to deploy popular technologies such as IBM MQ on AWS with the least amount of effort and time?",
    "options": [
      { "value": "A. Amazon Aurora.", "isCorrect": false },
      { "value": "B. Amazon CloudWatch.", "isCorrect": false },
      { "value": "C. AWS Quick Start reference deployments.", "isCorrect": true },
      { "value": "D. AWS OpsWorks.", "isCorrect": false }
    ],
    "correct_answer": ["C"]
  },
  {
    "id": 61,
    "tag": "Compute",
    "sub_tag": "Amazon EC2",
    "question": "An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?",
    "options": [
      { "value": "A. Elastic RI.", "isCorrect": false },
      { "value": "B. Premium RI.", "isCorrect": false },
      { "value": "C. Standard RI.", "isCorrect": false },
      { "value": "D. Convertible RI.", "isCorrect": true }
    ],
    "correct_answer": ["D"]
  },
  {
    "id": 62,
    "tag": "Management and Governance",
    "sub_tag": "AWS Organizations",
    "question": "A global company with a large number of AWS accounts is seeking a way in which they can centrally manage billing and security policies across all accounts. Which AWS Service will assist them in meeting these goals?",
    "options": [
      { "value": "A. AWS Organizations.", "isCorrect": true },
      { "value": "B. AWS Trusted Advisor.", "isCorrect": false },
      { "value": "C. IAM User Groups.", "isCorrect": false },
      { "value": "D. AWS Config.", "isCorrect": false }
    ],
    "correct_answer": ["A"]
  }, 
  {
    "id": 63,
    "tag": "Storage",
    "sub_tag": "Amazon S3",
    "question": "Which service provides object-level storage in AWS?",
    "options": [
      { "value": "A. Amazon EBS.", "isCorrect": false },
      { "value": "B. Amazon Instance Store.", "isCorrect": false },
      { "value": "C. Amazon EFS.", "isCorrect": false },
      { "value": "D. Amazon S3.", "isCorrect": true }
    ],
    "correct_answer": ["D"]
  },

{
  "id": 64,
  "tag":"Management and Governance",
  "sub_tag": "AWS Auto Scaling",
  "question": "A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?",
  "options": [
    { "value": "A. AWS Elastic Load Balancer.", "isCorrect": false },
    { "value": "B. AWS Budgets.", "isCorrect": false },
    { "value": "C. AWS Auto Scaling.", "isCorrect": true },
    { "value": "D. AWS Cost Explorer.", "isCorrect": false }
  ],
  "correct_answer": ["C"]
},
{
  "id": 65,
  "tag": "Storage",
  "sub_tag": "Amazon S3",
  "question": "Which S3 storage class is best for data with unpredictable access patterns?",
  "options": [
    { "value": "A. Amazon S3 Intelligent-Tiering.", "isCorrect": true },
    { "value": "B. Amazon S3 Glacier Flexible Retrieval.", "isCorrect": false },
    { "value": "C. Amazon S3 Standard.", "isCorrect": false },
    { "value": "D. Amazon S3 Standard-Infrequent Access.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
}, 
{
  "id": 66,
  "tag": "Database",
  "sub_tag": "Amazon DyanmoDB",
  "question": "What is the AWS database service that allows you to upload data structured in key-value format?",
  "options": [
    { "value": "A. Amazon DynamoDB.", "isCorrect": true },
    { "value": "B. Amazon Aurora.", "isCorrect": false },
    { "value": "C. Amazon Redshift.", "isCorrect": false },
    { "value": "D. Amazon RDS.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 67,
  "tag": "Compute",
  "sub_tag": "Amazon EC2",
  "question": "Which of the following is NOT correct regarding Amazon EC2 On-demand instances?",
  "options": [
    { "value": "A. You have to pay a start-up fee when launching a new instance for the first time.", "isCorrect": true },
    { "value": "B. The on-demand instances follow the AWS pay-as-you-go pricing model.", "isCorrect": false },
    { "value": "C. With on-demand instances, no longer-term commitments or upfront payments are needed.", "isCorrect": false },
    { "value": "D. When using on-demand Linux instances, you are charged per second based on an hourly rate.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 68,
  "tag": "Security, Identity, and Compliance",
  "sub_tag": "Amazon Inspector",
  "question": "A company has moved to AWS recently. Which of the following AWS Services will help ensure that they have the proper security settings? (Choose TWO)",
  "options": [
    { "value": "A. AWS Trusted Advisor.", "isCorrect": true },
    { "value": "B. Amazon Inspector.", "isCorrect": true },
    { "value": "C. Amazon SNS.", "isCorrect": false },
    { "value": "D. Amazon CloudWatch.", "isCorrect": false },
    { "value": "E. Concierge Support Team.", "isCorrect": false }
  ],
  "correct_answer": ["A", "B"]
}, 
{
  "id": 69,
  "tag": "Security, Identity, and Compliance",
  "sub_tag": "AWS MFA",
  "question": "What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?",
  "options": [
    { "value": "A. Encrypted keys.", "isCorrect": false },
    { "value": "B. Email verification.", "isCorrect": false },
    { "value": "C. AWS KMS.", "isCorrect": false },
    { "value": "D. AWS MFA.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
}, 
{
  "id": 70,
  "tag": "Management and Governance",
  "sub_tag": "Best Practices",
  "question": "A company is introducing a new product to their customers, and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?",
  "options": [
    { "value": "A. AWS Knowledge Center.", "isCorrect": false },
    { "value": "B. AWS Health Dashboard.", "isCorrect": false },
    { "value": "C. Infrastructure Event Management.", "isCorrect": true },
    { "value": "D. AWS Support Concierge Service.", "isCorrect": false }
  ],
  "correct_answer": ["C"]
},
{
  "id": 71,
  "tag": "Database",
  "sub_tag": "Amazon RDS",
  "question": "You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?",
  "options": [
    { "value": "A. Amazon RDS.", "isCorrect": true },
    { "value": "B. Amazon Redshift.", "isCorrect": false },
    { "value": "C. Amazon DynamoDB.", "isCorrect": false },
    { "value": "D. Amazon CloudWatch.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 72,
  "tag": "Management and Governance",
  "sub_tag": "Best Practices",
  "question": "Which of the below is a best-practice when designing solutions on AWS?",
  "options": [
    { "value": "A. Invest heavily in architecting your environment, as it is not easy to change your design later.", "isCorrect": false },
    { "value": "B. Use AWS reservations to reduce costs when testing your production environment.", "isCorrect": false },
    { "value": "C. Automate wherever possible to make architectural experimentation easier.", "isCorrect": true },
    { "value": "D. Provision a large compute capacity to handle any spikes in load.", "isCorrect": false }
  ],
  "correct_answer": ["C"]
},
{
  "id": 73,
  "tag": "Security, Identity, and Compliance",
  "sub_tag": "Best Practices",
  "question": "According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?",
  "options": [
    { "value": "A. Penetration testing is not allowed in AWS.", "isCorrect": false },
    { "value": "B. Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure.", "isCorrect": false },
    { "value": "C. Penetration testing can be performed by the customer on their own instances without prior authorization from AWS.", "isCorrect": true },
    { "value": "D. The AWS customers are only allowed to perform penetration testing on services managed by AWS.", "isCorrect": false }
  ],
  "correct_answer": ["C"]
},{
  "id": 74,
  "tag": "Application Integration",
  "sub_tag": "Amazon Simple Queue Service (SQS)",
  "question": "Which service is used to ensure that messages between software components are not lost if one or more components fail?",
  "options": [
    { "value": "A. Amazon SQS.", "isCorrect": true },
    { "value": "B. Amazon SES.", "isCorrect": false },
    { "value": "C. AWS Direct Connect.", "isCorrect": false },
    { "value": "D. Amazon Connect.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 75,
  "tag": "Management and Governance",
  "sub_tag": "Best Practices",
  "question": "The principle “design for failure and nothing will fail” is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose TWO)",
  "options": [
    { "value": "A. Multi-factor authentication.", "isCorrect": false },
    { "value": "B. Availability Zones.", "isCorrect": true },
    { "value": "C. Elastic Load Balancing.", "isCorrect": true },
    { "value": "D. Penetration testing.", "isCorrect": false },
    { "value": "E. Vertical Scaling.", "isCorrect": false }
  ],
  "correct_answer": ["B", "C"]
},
{
  "id": 76,
  "tag": "Networking and Content Delivery",
  "sub_tag": "Amazon VPC",
  "question": "What is the AWS service that provides a virtual network dedicated to your AWS account?",
  "options": [
    { "value": "A. AWS VPN.", "isCorrect": false },
    { "value": "B. AWS Subnets.", "isCorrect": false },
    { "value": "C. AWS Dedicated Hosts.", "isCorrect": false },
    { "value": "D. Amazon VPC.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 77,
  "tag": "Security, Identity, and Compliance",
  "sub_tag": "Best Practices",
  "question": "According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)",
  "options": [
    { "value": "A. Managing environmental events of AWS data centers.", "isCorrect": false },
    { "value": "B. Protecting the confidentiality of data in transit in Amazon S3.", "isCorrect": true },
    { "value": "C. Controlling physical access to AWS Regions.", "isCorrect": false },
    { "value": "D. Ensuring that the underlying EC2 host is configured properly.", "isCorrect": false },
    { "value": "E. Patching applications installed on Amazon EC2.", "isCorrect": true }
  ],
  "correct_answer": ["B", "E"]
},
{
  "id": 78,
  "tag": "Compute",
  "sub_tag": "AWS Lambda",
  "question": "Which of the following AWS services can be used as a compute resource? (Choose TWO)",
  "options": [
    { "value": "A. Amazon VPC.", "isCorrect": false },
    { "value": "B. Amazon CloudWatch.", "isCorrect": false },
    { "value": "C. Amazon S3.", "isCorrect": false },
    { "value": "D. Amazon EC2.", "isCorrect": true },
    { "value": "E. AWS Lambda.", "isCorrect": true }
  ],
  "correct_answer": ["D", "E"]
},
{
  "id": 79,
  "tag": "Storage",
  "sub_tag": "Amazon S3",
  "question": "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
  "options": [
    { "value": "A. Amazon EBS.", "isCorrect": false },
    { "value": "B. Amazon SQS.", "isCorrect": false },
    { "value": "C. Amazon S3.", "isCorrect": true },
    { "value": "D. Amazon Instance store.", "isCorrect": false }
  ],
  "correct_answer": ["C"]
},
{
  "id": 80,
  "tag": "Security, Identity, and Compliance",
  "sub_tag": "AWS Key Management Service (KMS)",
  "question": "Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?",
  "options": [
    { "value": "A. Instance Password.", "isCorrect": false },
    { "value": "B. Key pairs.", "isCorrect": false },
    { "value": "C. Access Keys.", "isCorrect": true },
    { "value": "D. MFA.", "isCorrect": false }
  ],
  "correct_answer": ["C"]
},
{
  "id": 81,
  "tag": "Database",
  "sub_tag": "Amazon Elasticache",
  "question": "What does Amazon ElastiCache provide?",
  "options": [
    { "value": "A. In-memory caching for read-heavy applications.", "isCorrect": true },
    { "value": "B. An Ehcache compatible in-memory data store.", "isCorrect": false },
    { "value": "C. An online software store that allows Customers to launch pre-configured software with just few clicks.", "isCorrect": false },
    { "value": "D. A domain name system in the cloud.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 82,
  "tag": "Management and Governance",
  "sub_tag": "AWS Organizations",
  "question": "What is the AWS service that enables you to manage all of your AWS accounts from a single master account?",
  "options": [
    { "value": "A. AWS WAF.", "isCorrect": false },
    { "value": "B. AWS Trusted Advisor.", "isCorrect": false },
    { "value": "C. AWS Organizations.", "isCorrect": true },
    { "value": "D. Amazon Config.", "isCorrect": false }
  ],
  "correct_answer": ["C"]
},
{
  "id": 83,
  "tag": "Compute",
  "sub_tag": "Best Practices",
  "question": "Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?",
  "options": [
    { "value": "A. Dedicated Instances.", "isCorrect": false },
    { "value": "B. Dedicated Hosts.", "isCorrect": true },
    { "value": "C. On-demand Instances.", "isCorrect": false },
    { "value": "D. Reserved Instances.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 84,
  "tag": "Cloud Financial Management",
  "sub_tag": "Best Practices",
  "question": "Which of the following is one of the benefits of moving infrastructure from an on-premises data center to AWS?",
  "options": [
    { "value": "A. Free support for all enterprise customers.", "isCorrect": false },
    { "value": "B. Automatic data protection.", "isCorrect": false },
    { "value": "C. Reduced Capital Expenditure (CapEx).", "isCorrect": true },
    { "value": "D. AWS holds responsibility for managing customer applications.", "isCorrect": false }
  ],
  "correct_answer": ["C"]
},
{
  "id": 85,
  "tag": "Management and Governance",
  "sub_tag": "Best Practices",
  "question": "Which of the following are important design principles you should adopt when designing systems on AWS? (Choose TWO)",
  "options": [
    { "value": "A. Always use Global Services in your architecture rather than Regional Services.", "isCorrect": false },
    { "value": "B. Always choose to pay as you go.", "isCorrect": false },
    { "value": "C. Treat servers as fixed resources.", "isCorrect": false },
    { "value": "D. Automate wherever possible.", "isCorrect": true },
    { "value": "E. Remove single points of failure.", "isCorrect": true }
  ],
  "correct_answer": ["D", "E"]
},
{
  "id": 86,
  "tag": "Networking and Content Delivery",
  "sub_tag": "AWS Direct Connect",
  "question": "Which AWS Service can be used to establish a dedicated, private network connection between AWS and your datacenter?",
  "options": [
    { "value": "A. AWS Direct Connect.", "isCorrect": true },
    { "value": "B. Amazon CloudFront.", "isCorrect": false },
    { "value": "C. AWS Snowball.", "isCorrect": false },
    { "value": "D. Amazon Route 53.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 87,
  "tag": "Networking and Content Delivery",
  "sub_tag": "Amazon VPC",
  "question": "You are working on two projects that require completely different network configurations. Which AWS service or feature will allow you to isolate resources and network configurations?",
  "options": [
    { "value": "A. Internet gateways.", "isCorrect": false },
    { "value": "B. Virtual Private Cloud.", "isCorrect": true },
    { "value": "C. Security Groups.", "isCorrect": false },
    { "value": "D. Amazon CloudFront.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 88,
  "tag": "Security, Identity, and Compliance",
  "sub_tag": "AWS WAF",
  "question": "Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?",
  "options": [
    { "value": "A. Amazon Cognito.", "isCorrect": false },
    { "value": "B. AWS IAM.", "isCorrect": false },
    { "value": "C. Amazon Aurora.", "isCorrect": false },
    { "value": "D. AWS WAF.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 89,
  "tag": "Analytics",
  "sub_tag": "Amazon EMR",
  "question": "An organization needs to analyze and process a large number of data sets. Which AWS service should they use?",
  "options": [
    { "value": "A. Amazon EMR.", "isCorrect": true },
    { "value": "B. Amazon MQ.", "isCorrect": false },
    { "value": "C. Amazon SNS.", "isCorrect": false },
    { "value": "D. Amazon SQS.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 90,
  "tag": "Security, Identity, and Compliance",
  "sub_tag": "Best Practices",
  "question": "Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS? (Choose TWO)",
  "options": [
    { "value": "A. Monitoring network performance.", "isCorrect": false },
    { "value": "B. Installing software on EC2 instances.", "isCorrect": false },
    { "value": "C. Creating hypervisors.", "isCorrect": true },
    { "value": "D. Configuring Access Control Lists (ACLs).", "isCorrect": false },
    { "value": "E. Hardware maintenance.", "isCorrect": true }
  ],
  "correct_answer": ["C", "E"]
},
{
  "id": 91,
  "tag": "Compute",
  "sub_tag": "Amazon EC2",
  "question": "What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?",
  "options": [
    { "value": "A. Amazon Redshift.", "isCorrect": false },
    { "value": "B. Amazon DynamoDB.", "isCorrect": false },
    { "value": "C. Amazon EC2.", "isCorrect": true },
    { "value": "D. Amazon RDS.", "isCorrect": false }
  ],
  "correct_answer": ["C"]
},
{
  "id": 92,
  "tag": "Security, Identity, and Compliance",
  "sub_tag": "Best Practices",
  "question": "What are the default security credentials that are required to access the AWS management console for an IAM user account?",
  "options": [
    { "value": "A. MFA.", "isCorrect": false },
    { "value": "B. Security tokens.", "isCorrect": false },
    { "value": "C. A user name and password.", "isCorrect": true },
    { "value": "D. Access keys.", "isCorrect": false }
  ],
  "correct_answer": ["C"]
},
{
  "id": 93,
  "tag": "Compute",
  "sub_tag": "AMI",
  "question": "In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?",
  "options": [
    { "value": "A. IAM.", "isCorrect": false },
    { "value": "B. An internet gateway.", "isCorrect": false },
    { "value": "C. EBS Snapshot.", "isCorrect": false },
    { "value": "D. AMI.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 94,
  "tag": "Cloud Financial Management",
  "sub_tag": "Best Practices",
  "question": "What are two advantages of using Cloud Computing over using traditional data centers? (Choose TWO)",
  "options": [
    { "value": "A. Reserved Compute capacity.", "isCorrect": false },
    { "value": "B. Eliminating Single Points of Failure (SPOFs).", "isCorrect": false },
    { "value": "C. Distributed infrastructure.", "isCorrect": true },
    { "value": "D. Virtualized compute resources.", "isCorrect": true },
    { "value": "E. Dedicated hosting.", "isCorrect": false }
  ],
  "correct_answer": ["C", "D"]
},
{
  "id": 95,
  "tag": "Security, Identity, and Compliance",
  "sub_tag": "Best Practices",
  "question": "Which of the following aspects of security are managed by AWS? (Choose TWO)",
  "options": [
    { "value": "A. Encryption of EBS volumes.", "isCorrect": false },
    { "value": "B. VPC security.", "isCorrect": false },
    { "value": "C. Access permissions.", "isCorrect": false },
    { "value": "D. Hardware patching.", "isCorrect": true },
    { "value": "E. Securing global physical infrastructure.", "isCorrect": true }
  ],
  "correct_answer": ["D", "E"]
},
{
  "id": 96,
  "tag": "Management and Governance",
  "sub_tag": "Best Practices",
  "question": "Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?",
  "options": [
    { "value": "A. The ability of a system to recover gracefully from failure.", "isCorrect": false },
    { "value": "B. The efficient use of computing resources to meet requirements.", "isCorrect": false },
    { "value": "C. The ability to monitor systems and improve supporting processes and procedures.", "isCorrect": true },
    { "value": "D. The ability to manage datacenter operations more efficiently.", "isCorrect": false }
  ],
  "correct_answer": ["C"]
},
{
  "id": 97,
  "tag": "Networking and Content Delivery",
  "sub_tag": "Best Practices",
  "question": "AWS has created a large number of Edge Locations as part of its Global Infrastructure. Which of the following is NOT a benefit of using Edge Locations?",
  "options": [
    { "value": "A. Edge locations are used by CloudFront to cache the most recent responses.", "isCorrect": false },
    { "value": "B. Edge locations are used by CloudFront to improve your end users’ experience when uploading files.", "isCorrect": false },
    { "value": "C. Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency.", "isCorrect": true },
    { "value": "D. Edge locations are used by CloudFront to distribute content to global users with low latency.", "isCorrect": false }
  ],
  "correct_answer": ["C"]
},
{
  "id": 98,
  "tag": "Management and Governance",
  "sub_tag": "AWS CloudTrail",
  "question": "What are the change management tools that help AWS customers audit and monitor all resource changes in their AWS environment? (Choose TWO)",
  "options": [
    { "value": "A. AWS CloudTrail.", "isCorrect": true },
    { "value": "B. Amazon Comprehend.", "isCorrect": false },
    { "value": "C. AWS Transit Gateway.", "isCorrect": false },
    { "value": "D. AWS X-Ray.", "isCorrect": false },
    { "value": "E. AWS Config.", "isCorrect": true }
  ],
  "correct_answer": ["A", "E"]
},
{
  "id": 99,
  "tag": "Containers",
  "sub_tag": "Amazon ECS",
  "question": "Which of the following services allows you to run containerized applications on a cluster of EC2 instances?",
  "options": [
    { "value": "A. Amazon ECS.", "isCorrect": true },
    { "value": "B. AWS Data Pipeline.", "isCorrect": false },
    { "value": "C. AWS Cloud9.", "isCorrect": false },
    { "value": "D. AWS Personal Health Dashboard.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 100,
  "tag": "Management and Governance",
  "sub_tag": "AWS CloudTrail",
  "question": "Which of the following services will help businesses ensure compliance in AWS?",
  "options": [
    { "value": "A. CloudFront.", "isCorrect": false },
    { "value": "B. CloudEndure Migration.", "isCorrect": false },
    { "value": "C. CloudWatch.", "isCorrect": false },
    { "value": "D. CloudTrail.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 101,
  "tag": "Storage",
  "sub_tag": "Amazon S3 Glacier",
  "question": "Which of the following procedures will help reduce your Amazon S3 costs?",
  "options": [
    { "value": "A. Use the Import/Export feature to move old files automatically to Amazon Glacier.", "isCorrect": false },
    { "value": "B. Use the right combination of storage classes based on different use cases.", "isCorrect": true },
    { "value": "C. Pick the right Availability Zone for your S3 bucket.", "isCorrect": false },
    { "value": "D. Move all the data stored in S3 standard to EBS.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 102,
  "tag": "Management and Governance",
  "sub_tag": "AWS Auto Scaling",
  "question": "What are the AWS services/features that can help you maintain a highly available and fault-tolerant architecture in AWS? (Choose TWO)",
  "options": [
    { "value": "A. AWS Direct Connect.", "isCorrect": false },
    { "value": "B. Amazon EC2 Auto Scaling.", "isCorrect": true },
    { "value": "C. Elastic Load Balancer.", "isCorrect": true },
    { "value": "D. CloudFormation.", "isCorrect": false },
    { "value": "E. Network ACLs.", "isCorrect": false }
  ],
  "correct_answer": ["B", "C"]
},
{
  "id": 103,
  "tag": "Cost Management",
  "sub_tag": "Best Practices",
  "question": "Which of the following activities may help reduce your AWS monthly costs?",
  "options": [
    { "value": "A. Enabling Amazon EC2 Auto Scaling for all of your workloads.", "isCorrect": true },
    { "value": "B. Using the AWS Network Load Balancer (NLB) to load balance the incoming HTTP requests.", "isCorrect": false },
    { "value": "C. Removing all of your Cost Allocation Tags.", "isCorrect": false },
    { "value": "D. Deploying your AWS resources across multiple Availability Zones.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 104,
  "tag": "Storage",
  "sub_tag": "Amazon S3",
  "question": "What is the AWS service/feature that takes advantage of Amazon CloudFront’s globally distributed edge locations to transfer files to S3 with higher upload speeds?",
  "options": [
    { "value": "A. S3 Transfer Acceleration.", "isCorrect": true },
    { "value": "B. AWS WAF.", "isCorrect": false },
    { "value": "C. AWS Snowmobile.", "isCorrect": false },
    { "value": "D. AWS Snowball.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 105,
  "tag": "Security, Identity, and Compliance",
  "sub_tag": "AWS Security Hub",
  "question": "Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?",
  "options": [
    { "value": "A. AWS X-Ray.", "isCorrect": false },
    { "value": "B. Network ACL.", "isCorrect": false },
    { "value": "C. Security Groups.", "isCorrect": true },
    { "value": "D. VPC Flow logs.", "isCorrect": false }
  ],
  "correct_answer": ["C"]
},
{
  "id": 106,
  "tag": "Networking and Content Delivery",
  "sub_tag": "AWS Global Accelerator",
  "question": "Which AWS services can be used to improve the performance of a global application and reduce latency for its users? (Choose TWO)",
  "options": [
    { "value": "A. AWS KMS.", "isCorrect": false },
    { "value": "B. AWS Global accelerator.", "isCorrect": true },
    { "value": "C. AWS Direct Connect.", "isCorrect": false },
    { "value": "D. AWS Glue.", "isCorrect": false },
    { "value": "E. Amazon CloudFront.", "isCorrect": true }
  ],
  "correct_answer": ["B", "E"]
},
{
  "id": 107,
  "tag": "Database",
  "sub_tag": "Best Practices",
  "question": "Using Amazon RDS falls under the shared responsibility model. Which of the following are customer responsibilities? (Choose TWO)",
  "options": [
    { "value": "A. Building the relational database schema.", "isCorrect": true },
    { "value": "B. Performing backups.", "isCorrect": false },
    { "value": "C. Managing the database settings.", "isCorrect": true },
    { "value": "D. Patching the database software.", "isCorrect": false },
    { "value": "E. Installing the database software.", "isCorrect": false }
  ],
  "correct_answer": ["A", "C"]
},
{
  "id": 108,
  "tag": "Database",
  "sub_tag": "Amazon RDS",
  "question": "A company has a large amount of structured data stored in their on-premises data center. They are planning to migrate all the data to AWS, what is the most appropriate AWS database option?",
  "options": [
    { "value": "A. Amazon DynamoDB.", "isCorrect": false },
    { "value": "B. Amazon SNS.", "isCorrect": false },
    { "value": "C. Amazon RDS.", "isCorrect": true },
    { "value": "D. Amazon ElastiCache.", "isCorrect": false }
  ],
  "correct_answer": ["C"]
},
{
  "id": 109,
  "tag": "Management and Governance",
  "sub_tag": "APN Technology Partners",
  "question": "A company has created a solution that helps AWS customers improve their architectures on AWS. Which AWS program may support this company?",
  "options": [
    { "value": "A. APN Consulting Partners.", "isCorrect": false },
    { "value": "B. AWS TAM.", "isCorrect": false },
    { "value": "C. APN Technology Partners.", "isCorrect": true },
    { "value": "D. AWS Professional Services.", "isCorrect": false }
  ],
  "correct_answer": ["C"]
},
{
  "id": 110,
  "tag": "Compute",
  "sub_tag": "AWS Lambda",
  "question": "What is the AWS serverless service that allows you to run your applications without any administrative burden?",
  "options": [
    { "value": "A. Amazon LightSail.", "isCorrect": false },
    { "value": "B. AWS Lambda.", "isCorrect": true },
    { "value": "C. Amazon RDS instances.", "isCorrect": false },
    { "value": "D. Amazon EC2 instances.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 111,
  "tag": "Reliability",
  "sub_tag": "Best Practices",
  "question": "Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?",
  "options": [
    { "value": "A. She has properly built an elastic system.", "isCorrect": false },
    { "value": "B. She has properly built a fault tolerant system.", "isCorrect": true },
    { "value": "C. She has properly built an encrypted system.", "isCorrect": false },
    { "value": "D. She has properly built a scalable system.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 112,
  "tag": "Storage",
  "sub_tag": "Amazon Elastic File System (EFS)",
  "question": "Where can you store files in AWS? (Choose TWO)",
  "options": [
    { "value": "A. Amazon EFS.", "isCorrect": true },
    { "value": "B. Amazon SNS.", "isCorrect": false },
    { "value": "C. Amazon EBS.", "isCorrect": true },
    { "value": "D. Amazon ECS.", "isCorrect": false },
    { "value": "E. Amazon EMR.", "isCorrect": false }
  ],
  "correct_answer": ["A", "C"]
},
{
  "id": 113,
  "tag": "Application Integration",
  "sub_tag": "Amazon Simple Queue Service (SQS)",
  "question": "Which AWS service can be used to store and reliably deliver messages across distributed systems?",
  "options": [
    { "value": "A. Amazon Simple Queue Service.", "isCorrect": true },
    { "value": "B. AWS Storage Gateway.", "isCorrect": false },
    { "value": "C. Amazon Simple Email Service.", "isCorrect": false },
    { "value": "D. Amazon Simple Storage Service.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 114,
  "tag": "Cost Management",
  "sub_tag": "Best Practices",
  "question": "Which of the following describes the payment model that AWS makes available for customers that can commit to using Amazon EC2 over a one or 3-year term to reduce their total computing costs?",
  "options": [
    { "value": "A. Pay less as AWS grows.", "isCorrect": false },
    { "value": "B. Pay as you go.", "isCorrect": false },
    { "value": "C. Pay less by using more.", "isCorrect": false },
    { "value": "D. Save when you reserve.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 115,
  "tag": "Cost Management",
  "sub_tag": "Best Practices",
  "question": "A company is migrating its on-premises database to Amazon RDS. What should the company do to ensure Amazon RDS costs are kept to a minimum?",
  "options": [
    { "value": "A. Right-size before and after migration.", "isCorrect": true },
    { "value": "B. Use a Multi-Region Active-Passive architecture.", "isCorrect": false },
    { "value": "C. Combine On-demand Capacity Reservations with Saving Plans.", "isCorrect": false },
    { "value": "D. Use a Multi-Region Active-Active architecture.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 116,
  "tag": "Database",
  "sub_tag": "Amazon Elastic Block Store (EBS)",
  "question": "What is the primary storage service used by Amazon RDS database instances?",
  "options": [
    { "value": "A. Amazon Glacier.", "isCorrect": false },
    { "value": "B. Amazon EBS.", "isCorrect": true },
    { "value": "C. Amazon EFS.", "isCorrect": false },
    { "value": "D. Amazon S3.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 117,
  "tag": "Developer Tools",
  "sub_tag": "AWS X-Ray",
  "question": "A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?",
  "options": [
    { "value": "A. AWS CodePipeline.", "isCorrect": false },
    { "value": "B. AWS X-Ray.", "isCorrect": true },
    { "value": "C. Amazon Inspector.", "isCorrect": false },
    { "value": "D. AWS CloudTrail.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 118,
  "tag": "Database",
  "sub_tag": "Amazon DynamoDB",
  "question": "Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? (Choose TWO)",
  "options": [
    { "value": "A. Amazon Redshift.", "isCorrect": false },
    { "value": "B. AWS Snowball.", "isCorrect": false },
    { "value": "C. Amazon Simple Storage Service.", "isCorrect": true },
    { "value": "D. Amazon EBS.", "isCorrect": false },
    { "value": "E. Amazon DynamoDB.", "isCorrect": true }
  ],
  "correct_answer": ["C", "E"]
},
{
  "id": 119,
  "tag": "Database",
  "sub_tag": "Best Practices",
  "question": "What are the Amazon RDS features that can be used to improve the availability of your database? (Choose TWO)",
  "options": [
    { "value": "A. AWS Regions.", "isCorrect": false },
    { "value": "B. Multi-AZ Deployment.", "isCorrect": true },
    { "value": "C. Automatic patching.", "isCorrect": false },
    { "value": "D. Read Replicas.", "isCorrect": true },
    { "value": "E. Edge Locations.", "isCorrect": false }
  ],
  "correct_answer": ["B", "D"]
},
{
  "id": 120,
  "tag": "Performance Efficiency",
  "sub_tag": "Best Practices",
  "question": "Sarah has deployed an application in the Northern California (us-west-1) region. After examining the application’s traffic, she notices that about 30% of the traffic is coming from Asia. What can she do to reduce latency for the users in Asia?",
  "options": [
    { "value": "A. Replicate the current resources across multiple Availability Zones within the same region.", "isCorrect": false },
    { "value": "B. Migrate the application to a hosting provider in Asia.", "isCorrect": false },
    { "value": "C. Recreate the website content.", "isCorrect": false },
    { "value": "D. Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 121,
  "tag": "Security, Identity, and Compliance",
  "sub_tag": "AWS Identity and Access Management",
  "question": "An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?",
  "options": [
    { "value": "A. AWS Identity and Access Management.", "isCorrect": true },
    { "value": "B. Amazon RDS.", "isCorrect": false },
    { "value": "C. Network Access Control Lists.", "isCorrect": false },
    { "value": "D. Amazon EMR.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 122,
  "tag": "Database",
  "sub_tag": "Amazon EC2",
  "question": "Using Amazon EC2 falls under which of the following cloud computing models?",
  "options": [
    { "value": "A. Iaas & SaaS.", "isCorrect": false },
    { "value": "B. IaaS.", "isCorrect": true },
    { "value": "C. SaaS.", "isCorrect": false },
    { "value": "D. PaaS.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 123,
  "tag": "Developer Tools",
  "sub_tag": "Bsdt Practices",
  "question": "Which of the below is a best-practice when building applications on AWS?",
  "options": [
    { "value": "A. Strengthen physical security by applying the principle of least privilege.", "isCorrect": false },
    { "value": "B. Ensure that the application runs on hardware from trusted vendors.", "isCorrect": false },
    { "value": "C. Use IAM policies to maintain performance.", "isCorrect": false },
    { "value": "D. Decouple the components of the application so that they run independently.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 124,
  "tag": "Storage",
  "sub_tag": "Amazon S3",
  "question": "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
  "options": [
    { "value": "A. Amazon EBS.", "isCorrect": false },
    { "value": "B. Amazon SQS.", "isCorrect": false },
    { "value": "C. Amazon Instance store.", "isCorrect": false },
    { "value": "D. Amazon S3.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 125,
  "tag": "Storage",
  "sub_tag": "Amazon S3 Glacier",
  "question": "Amazon Glacier is an Amazon S3 storage class that is suitable for storing [...] & [...]. (Choose TWO)",
  "options": [
    { "value": "A. Active archives.", "isCorrect": true },
    { "value": "B. Dynamic websites’ assets.", "isCorrect": false },
    { "value": "C. Long-term analytic data.", "isCorrect": true },
    { "value": "D. Active databases.", "isCorrect": false },
    { "value": "E. Cached data.", "isCorrect": false }
  ],
  "correct_answer": ["A", "C"]
},
{
  "id": 126,
  "tag": "Compute",
  "sub_tag": "AWS Elastic Beanstalk",
  "question": "What does Amazon Elastic Beanstalk provide?",
  "options": [
    { "value": "A. A PaaS solution to automate application deployment.", "isCorrect": true },
    { "value": "B. A compute engine for Amazon ECS.", "isCorrect": false },
    { "value": "C. A scalable file storage solution for use with AWS and on-premises servers.", "isCorrect": false },
    { "value": "D. A NoSQL database service.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 127,
  "tag": "Securiry, Identity, and Compliance",
  "sub_tag": "Amazon Inspector",
  "question": "What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?",
  "options": [
    { "value": "A. Amazon Kinesis.", "isCorrect": false },
    { "value": "B. Security groups.", "isCorrect": false },
    { "value": "C. Amazon Inspector.", "isCorrect": true },
    { "value": "D. AWS Network Access Control Lists.", "isCorrect": false }
  ],
  "correct_answer": ["C"]
},
{
  "id": 128,
  "tag": "Management and Governance",
  "sub_tag": "Best Practices",
  "question": "Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? (Choose TWO)",
  "options": [
    { "value": "A. Patch management controls.", "isCorrect": false },
    { "value": "B. Database controls.", "isCorrect": false },
    { "value": "C. Awareness & Training.", "isCorrect": false },
    { "value": "D. Environmental controls.", "isCorrect": true },
    { "value": "E. Physical controls.", "isCorrect": true }
  ],
  "correct_answer": ["D", "E"]
},
{
  "id": 129,
  "tag": "Cloud Financial Management",
  "sub_tag": "Best Practices",
  "question": "A company needs to host a database in Amazon RDS for at least three years. Which of the following options would be the most cost-effective solution?",
  "options": [
    { "value": "A. Reserved instances - No Upfront.", "isCorrect": false },
    { "value": "B. Reserved instances - Partial Upfront.", "isCorrect": true },
    { "value": "C. On-Demand instances.", "isCorrect": false },
    { "value": "D. Spot Instances.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 130,
  "tag": "Networking and Content Delivery",
  "sub_tag": "Best Practices",
  "question": "Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users’ experience?",
  "options": [
    { "value": "A. Elasticity.", "isCorrect": false },
    { "value": "B. Global reach.", "isCorrect": true },
    { "value": "C. Data durability.", "isCorrect": false },
    { "value": "D. High availability.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 131,
  "tag": "Cloud Financial Management",
  "sub_tag": "AWS Lambda",
  "question": "Savings Plans are available for which of the following AWS compute services? (Choose TWO)",
  "options": [
    { "value": "A. AWS Batch.", "isCorrect": false },
    { "value": "B. AWS Outposts.", "isCorrect": false },
    { "value": "C. Amazon Lightsail.", "isCorrect": false },
    { "value": "D. Amazon EC2.", "isCorrect": true },
    { "value": "E. AWS Lambda.", "isCorrect": true }
  ],
  "correct_answer": ["D", "E"]
},
{
  "id": 132,
  "tag": "Storage",
  "sub_tag": "Amazon Elastic File System (EFS)",
  "question": "Where can you store files in AWS? (Choose TWO)",
  "options": [
    { "value": "A. Amazon EFS.", "isCorrect": true },
    { "value": "B. Amazon SNS.", "isCorrect": false },
    { "value": "C. Amazon EBS.", "isCorrect": true },
    { "value": "D. Amazon ECS.", "isCorrect": false },
    { "value": "E. Amazon EMR.", "isCorrect": false }
  ],
  "correct_answer": ["A", "C"]
},
{
  "id": 133,
  "tag": "Application Integration",
  "sub_tag": "Amazon Simple Queue Service (SQS)",
  "question": "Which AWS service can be used to store and reliably deliver messages across distributed systems?",
  "options": [
    { "value": "A. Amazon Simple Queue Service.", "isCorrect": true },
    { "value": "B. AWS Storage Gateway.", "isCorrect": false },
    { "value": "C. Amazon Simple Email Service.", "isCorrect": false },
    { "value": "D. Amazon Simple Storage Service.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 134,
  "tag": "Billing",
  "sub_tag": "",
  "question": "Which of the following describes the payment model that AWS makes available for customers that can commit to using Amazon EC2 over a one or 3-year term to reduce their total computing costs?",
  "options": [
    { "value": "A. Pay less as AWS grows.", "isCorrect": false },
    { "value": "B. Pay as you go.", "isCorrect": false },
    { "value": "C. Pay less by using more.", "isCorrect": false },
    { "value": "D. Save when you reserve.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 135,
  "tag": "Cloud Financial Management",
  "sub_tag": "Best Practices",
  "question": "A company is migrating its on-premises database to Amazon RDS. What should the company do to ensure Amazon RDS costs are kept to a minimum?",
  "options": [
    { "value": "A. Right-size before and after migration.", "isCorrect": true },
    { "value": "B. Use a Multi-Region Active-Passive architecture.", "isCorrect": false },
    { "value": "C. Combine On-demand Capacity Reservations with Saving Plans.", "isCorrect": false },
    { "value": "D. Use a Multi-Region Active-Active architecture.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 136,
  "tag": "Storage",
  "sub_tag": "Amazon Elastic Block Store (EBS)",
  "question": "What is the primary storage service used by Amazon RDS database instances?",
  "options": [
    { "value": "A. Amazon Glacier.", "isCorrect": false },
    { "value": "B. Amazon EBS.", "isCorrect": true },
    { "value": "C. Amazon EFS.", "isCorrect": false },
    { "value": "D. Amazon S3.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 137,
  "tag": "Developer Tools",
  "sub_tag": "AWS X-Ray",
  "question": "A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?",
  "options": [
    { "value": "A. AWS CodePipeline.", "isCorrect": false },
    { "value": "B. AWS X-Ray.", "isCorrect": true },
    { "value": "C. Amazon Inspector.", "isCorrect": false },
    { "value": "D. AWS CloudTrail.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 138,
  "tag": "Database",
  "sub_tag": "Amazon DynamoDB",
  "question": "Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? (Choose TWO)",
  "options": [
    { "value": "A. Amazon Redshift.", "isCorrect": false },
    { "value": "B. AWS Snowball.", "isCorrect": false },
    { "value": "C. Amazon Simple Storage Service.", "isCorrect": true },
    { "value": "D. Amazon EBS.", "isCorrect": false },
    { "value": "E. Amazon DynamoDB.", "isCorrect": true }
  ],
  "correct_answer": ["C", "E"]
},
{
  "id": 139,
  "tag": "Serverless",
  "sub_tag": "Best Practices",
  "question": "What are the Amazon RDS features that can be used to improve the availability of your database? (Choose TWO)",
  "options": [
    { "value": "A. AWS Regions.", "isCorrect": false },
    { "value": "B. Multi-AZ Deployment.", "isCorrect": true },
    { "value": "C. Automatic patching.", "isCorrect": false },
    { "value": "D. Read Replicas.", "isCorrect": true },
    { "value": "E. Edge Locations.", "isCorrect": false }
  ],
  "correct_answer": ["B", "D"]
}, 
{
  "id": 140,
  "tag": "Networking and Content Delivery",
  "sub_tag": "Amzon CloudFront",
  "question": "Sarah has deployed an application in the Northern California (us-west-1) region. After examining the application’s traffic, she notices that about 30% of the traffic is coming from Asia. What can she do to reduce latency for the users in Asia?",
  "options": [
    { "value": "A. Replicate the current resources across multiple Availability Zones within the same region.", "isCorrect": false },
    { "value": "B. Migrate the application to a hosting provider in Asia.", "isCorrect": false },
    { "value": "C. Recreate the website content.", "isCorrect": false },
    { "value": "D. Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 141,
  "tag": "Security, Identity, and Compliance",
  "sub_tag": "AWS Identity and Access Management",
  "question": "An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?",
  "options": [
    { "value": "A. AWS Identity and Access Management.", "isCorrect": true },
    { "value": "B. Amazon RDS.", "isCorrect": false },
    { "value": "C. Network Access Control Lists.", "isCorrect": false },
    { "value": "D. Amazon EMR.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 142,
  "tag": "Compute",
  "sub_tag": "Amazon EC2",
  "question": "Using Amazon EC2 falls under which of the following cloud computing models?",
  "options": [
    { "value": "A. Iaas & SaaS.", "isCorrect": false },
    { "value": "B. IaaS.", "isCorrect": true },
    { "value": "C. SaaS.", "isCorrect": false },
    { "value": "D. PaaS.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 143,
  "tag": "Developer Tools",
  "sub_tag": "Best Practices",
  "question": "Which of the below is a best-practice when building applications on AWS?",
  "options": [
    { "value": "A. Strengthen physical security by applying the principle of least privilege.", "isCorrect": false },
    { "value": "B. Ensure that the application runs on hardware from trusted vendors.", "isCorrect": false },
    { "value": "C. Use IAM policies to maintain performance.", "isCorrect": false },
    { "value": "D. Decouple the components of the application so that they run independently.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 144,
  "tag": "Storage",
  "sub_tag": "Amazon S3",
  "question": "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
  "options": [
    { "value": "A. Amazon EBS.", "isCorrect": false },
    { "value": "B. Amazon SQS.", "isCorrect": false },
    { "value": "C. Amazon Instance store.", "isCorrect": false },
    { "value": "D. Amazon S3.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 145,
  "tag": "Storage",
  "sub_tag": "Amazon S3 Glacier",
  "question": "Amazon Glacier is an Amazon S3 storage class that is suitable for storing [...] & [...]. (Choose TWO)",
  "options": [
    { "value": "A. Active archives.", "isCorrect": true },
    { "value": "B. Dynamic websites’ assets.", "isCorrect": false },
    { "value": "C. Long-term analytic data.", "isCorrect": true },
    { "value": "D. Active databases.", "isCorrect": false },
    { "value": "E. Cached data.", "isCorrect": false }
  ],
  "correct_answer": ["A", "C"]
},
{
  "id": 146,
  "tag": "Compute",
  "sub_tag": "AWS Elastic Beanstalk",
  "question": "What does Amazon Elastic Beanstalk provide?",
  "options": [
    { "value": "A. A PaaS solution to automate application deployment.", "isCorrect": true },
    { "value": "B. A compute engine for Amazon ECS.", "isCorrect": false },
    { "value": "C. A scalable file storage solution for use with AWS and on-premises servers.", "isCorrect": false },
    { "value": "D. A NoSQL database service.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 147,
  "tag": "Security, Identity, and Compliance",
  "sub_tag": "Amazon Inspector",
  "question": "What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?",
  "options": [
    { "value": "A. Amazon Kinesis.", "isCorrect": false },
    { "value": "B. Security groups.", "isCorrect": false },
    { "value": "C. Amazon Inspector.", "isCorrect": true },
    { "value": "D. AWS Network Access Control Lists.", "isCorrect": false }
  ],
  "correct_answer": ["C"]
},
{
  "id": 148,
  "tag": "Developer Tools",
  "sub_tag": "Best Practices",
  "question": "Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? (Choose TWO)",
  "options": [
    { "value": "A. Patch management controls.", "isCorrect": false },
    { "value": "B. Database controls.", "isCorrect": false },
    { "value": "C. Awareness & Training.", "isCorrect": false },
    { "value": "D. Environmental controls.", "isCorrect": true },
    { "value": "E. Physical controls.", "isCorrect": true }
  ],
  "correct_answer": ["D", "E"]
},
{
  "id": 149,
  "tag": "Cloud Financial Management",
  "sub_tag": "Best Practices",
  "question": "A company needs to host a database in Amazon RDS for at least three years. Which of the following options would be the most cost-effective solution?",
  "options": [
    { "value": "A. Reserved instances - No Upfront.", "isCorrect": false },
    { "value": "B. Reserved instances - Partial Upfront.", "isCorrect": true },
    { "value": "C. On-Demand instances.", "isCorrect": false },
    { "value": "D. Spot Instances.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 150,
  "tag": "Customer Experience",
  "sub_tag": "Best Practices",
  "question": "Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users’ experience?",
  "options": [
    { "value": "A. Elasticity.", "isCorrect": false },
    { "value": "B. Global reach.", "isCorrect": true },
    { "value": "C. Data durability.", "isCorrect": false },
    { "value": "D. High availability.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 151,
  "tag": "Serverless",
  "sub_tag": "AWS Lambda",
  "question": "Savings Plans are available for which of the following AWS compute services? (Choose TWO)",
  "options": [
    { "value": "A. AWS Batch.", "isCorrect": false },
    { "value": "B. AWS Outposts.", "isCorrect": false },
    { "value": "C. Amazon Lightsail.", "isCorrect": false },
    { "value": "D. Amazon EC2.", "isCorrect": true },
    { "value": "E. AWS Lambda.", "isCorrect": true }
  ],
  "correct_answer": ["D", "E"]
},
{
  "id": 152,
  "tag": "Developer Tools",
  "sub_tag": "Best Practices",
  "question": "A company has business critical workloads hosted on AWS and they are unwilling to accept any downtime. Which of the following is a recommended best practice to protect their workloads in the event of an unexpected natural disaster?",
  "options": [
    { "value": "A. Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage.", "isCorrect": false },
    { "value": "B. Deploy AWS resources across multiple Availability Zones within the same AWS Region.", "isCorrect": false },
    { "value": "C. Create point-in-time backups in another subnet and recover this data when a disaster occurs.", "isCorrect": false },
    { "value": "D. Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 153,
  "tag": "Serverless",
  "sub_tag": "Best Practices",
  "question": "Which statement is correct with regards to AWS service limits? (Choose TWO)",
  "options": [
    { "value": "A. You can contact AWS support to increase the service limits.", "isCorrect": true },
    { "value": "B. Each IAM user has the same service limit.", "isCorrect": false },
    { "value": "C. There are no service limits on AWS.", "isCorrect": false },
    { "value": "D. You can use the AWS Trusted Advisor to monitor your service limits.", "isCorrect": true },
    { "value": "E. The Amazon Simple Email Service is responsible for sending email notifications when usage approaches a service limit.", "isCorrect": false }
  ],
  "correct_answer": ["A", "D"]
},
{
  "id": 154,
  "tag": "Developer Tools",
  "sub_tag": "AWS CLI",
  "question": "What is the AWS tool that enables you to use scripts to manage all AWS services and resources?",
  "options": [
    { "value": "A. AWS Console.", "isCorrect": false },
    { "value": "B. AWS Service Catalog.", "isCorrect": false },
    { "value": "C. AWS OpsWorks.", "isCorrect": false },
    { "value": "D. AWS CLI.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 155,
  "tag": "Networking and Content Delivery",
  "sub_tag": "AWS VPN",
  "question": "What are the connectivity options that can be used to build hybrid cloud architectures? (Choose TWO)",
  "options": [
    { "value": "A. AWS Artifact.", "isCorrect": false },
    { "value": "B. AWS Cloud9.", "isCorrect": false },
    { "value": "C. AWS Direct Connect.", "isCorrect": true },
    { "value": "D. AWS CloudTrail.", "isCorrect": false },
    { "value": "E. AWS VPN.", "isCorrect": true }
  ],
  "correct_answer": ["C", "E"]
},
{
  "id": 156,
  "tag": "Networking and Content Delivery",
  "sub_tag": "Best Practices",
  "question": "A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?",
  "options": [
    { "value": "A. AWS EC2 Auto Recovery.", "isCorrect": false },
    { "value": "B. AWS Auto Scaling.", "isCorrect": false },
    { "value": "C. AWS Network Load Balancer.", "isCorrect": false },
    { "value": "D. AWS Application Load Balancer.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 157,
  "tag": "Databases",
  "sub_tag": "AWS Aurora",
  "question": "Which of the following AWS offerings is a MySQL-compatible relational database service that can scale capacity automatically based on demand?",
  "options": [
    { "value": "A. Amazon Neptune.", "isCorrect": false },
    { "value": "B. Amazon Aurora.", "isCorrect": true },
    { "value": "C. Amazon RDS for SQL Server.", "isCorrect": false },
    { "value": "D. Amazon RDS for PostgreSQL.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 158,
  "tag": "Security, Identity, and Compliance",
  "sub_tag": "AWS Shield",
  "question": "Which of the following can help protect your EC2 instances from DDoS attacks? (Choose TWO)",
  "options": [
    { "value": "A. AWS CloudHSM.", "isCorrect": false },
    { "value": "B. Security Groups.", "isCorrect": true },
    { "value": "C. AWS Batch.", "isCorrect": false },
    { "value": "D. AWS IAM.", "isCorrect": false },
    { "value": "E. Network Access Control Lists (Network ACLs).", "isCorrect": true }
  ],
  "correct_answer": ["B", "E"]
},
{
  "id": 159,
  "tag": "Analytics",
  "sub_tag": "Amazon Redshift",
  "question": "What is the AWS data warehouse service that supports a high level of query performance on large amounts of datasets?",
  "options": [
    { "value": "A. Amazon Redshift.", "isCorrect": true },
    { "value": "B. Amazon Kinesis.", "isCorrect": false },
    { "value": "C. Amazon DynamoDB.", "isCorrect": false },
    { "value": "D. Amazon RDS.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 160,
  "tag": "Serverless",
  "sub_tag": "Best Practices",
  "question": "Which of the following should be considered when performing a TCO analysis to compare the costs of running an application on AWS instead of on-premises?",
  "options": [
    { "value": "A. Application development.", "isCorrect": false },
    { "value": "B. Market research.", "isCorrect": false },
    { "value": "C. Business analysis.", "isCorrect": false },
    { "value": "D. Physical hardware.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 161,
  "tag": "Compute",
  "sub_tag": "Amazon EC2",
  "question": "How are AWS customers billed for Linux-based Amazon EC2 usage?",
  "options": [
    { "value": "A. EC2 instances will be billed on one second increments, with a minimum of one minute.", "isCorrect": true },
    { "value": "B. EC2 instances will be billed on one hour increments, with a minimum of one day.", "isCorrect": false },
    { "value": "C. EC2 instances will be billed on one minute increments, with a minimum of one hour.", "isCorrect": false },
    { "value": "D. EC2 instances will be billed on one day increments, with a minimum of one month.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 162,
  "tag": "Compute",
  "sub_tag": "Amazon EC2",
  "question": "Which of the following will impact the price paid for an EC2 instance? (Choose TWO)",
  "options": [
    { "value": "A. Instance type.", "isCorrect": true },
    { "value": "B. The Availability Zone where the instance is provisioned.", "isCorrect": true },
    { "value": "C. Load balancing.", "isCorrect": false },
    { "value": "D. Number of buckets.", "isCorrect": false },
    { "value": "E. Number of private IPs.", "isCorrect": false }
  ],
  "correct_answer": ["A", "B"]
},
{
  "id": 163,
  "tag": "Compute",
  "sub_tag": "Amazon EC2",
  "question": "A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?",
  "options": [
    { "value": "A. By creating an AWS Config template from the old instance and launching a new instance from it.", "isCorrect": false },
    { "value": "B. By creating an EBS Snapshot of the old instance.", "isCorrect": false },
    { "value": "C. By installing Aurora on EC2 and launching a new instance from it.", "isCorrect": false },
    { "value": "D. By creating an AMI from the old instance and launching a new instance from it.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 164,
  "tag": "Security, Identity, and Compliance",
  "sub_tag": "AWS Identity and Access Management",
  "question": "A company uses AWS Organizations to manage all of its AWS accounts. Which of the following allows the company to restrict what services and actions are allowed in each individual account?",
  "options": [
    { "value": "A. IAM Principals.", "isCorrect": false },
    { "value": "B. AWS Service Control Policies (SCPs).", "isCorrect": true },
    { "value": "C. IAM policies.", "isCorrect": false },
    { "value": "D. AWS Fargate.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 165,
  "tag": "Networking and Content Delivery",
  "sub_tag": "Best Practices",
  "question": "Which of the following statements describes the AWS Cloud’s agility?",
  "options": [
    { "value": "A. AWS allows you to host your applications in multiple regions around the world.", "isCorrect": false },
    { "value": "B. AWS provides customizable hardware at the lowest possible cost.", "isCorrect": false },
    { "value": "C. AWS allows you to provision resources in minutes.", "isCorrect": true },
    { "value": "D. AWS allows you to pay upfront to reduce costs.", "isCorrect": false }
  ],
  "correct_answer": ["C"]
}, 
{
  "id": 166,
  "tag": "Database",
  "sub_tag": "Amazon RDS",
  "question": "What are the benefits of using the Amazon Relational Database Service? (Choose TWO)",
  "options": [
    { "value": "A. Lower administrative burden.", "isCorrect": true },
    { "value": "B. Complete control over the underlying host.", "isCorrect": false },
    { "value": "C. Resizable compute capacity.", "isCorrect": false },
    { "value": "D. Scales automatically to larger or smaller instance types.", "isCorrect": true },
    { "value": "E. Supports the document and key-value data structure.", "isCorrect": false }
  ],
  "correct_answer": ["A", "D"]
},
{
  "id": 167,
  "tag": "Networking and Content Delivery",
  "sub_tag": "AWS VPN",
  "question": "What is the connectivity option that uses Internet Protocol Security (IPSec) to establish encrypted connectivity between an on-premises network and the AWS Cloud?",
  "options": [
    { "value": "A. Internet Gateway.", "isCorrect": false },
    { "value": "B. AWS IQ.", "isCorrect": false },
    { "value": "C. AWS Direct Connect.", "isCorrect": false },
    { "value": "D. AWS Site-to-Site VPN.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 168,
  "tag": "Customer Engagment",
  "sub_tag": "Best Practices",
  "question": "What is the minimum level of AWS support that provides 24x7 access to technical support engineers via phone and chat?",
  "options": [
    { "value": "A. Enterprise Support.", "isCorrect": false },
    { "value": "B. Developer Support.", "isCorrect": false },
    { "value": "C. Basic Support.", "isCorrect": false },
    { "value": "D. Business Support.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 169,
  "tag": "Networking and Content Delivery",
  "sub_tag": "Best Practices",
  "question": "Which of the following is used to control network traffic in AWS? (Choose TWO)",
  "options": [
    { "value": "A. Network Access Control Lists (NACLs).", "isCorrect": true },
    { "value": "B. Key Pairs.", "isCorrect": false },
    { "value": "C. Access Keys.", "isCorrect": false },
    { "value": "D. IAM Policies.", "isCorrect": false },
    { "value": "E. Security Groups.", "isCorrect": true }
  ],
  "correct_answer": ["A", "E"]
},
{
  "id": 170,
  "tag": "Compute",
  "sub_tag": "Amazon EC2",
  "question": "A company has developed a media transcoding application in AWS. The application is designed to recover quickly from hardware failures. Which one of the following types of instance would be the most cost-effective choice to use?",
  "options": [
    { "value": "A. Reserved instances.", "isCorrect": false },
    { "value": "B. Spot Instances.", "isCorrect": true },
    { "value": "C. On-Demand instances.", "isCorrect": false },
    { "value": "D. Dedicated instances.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 171,
  "tag": "Management and Governance",
  "sub_tag": "AWS Health Dashboard",
  "question": "Which AWS Service provides the current status of all AWS Services in all AWS Regions?",
  "options": [
    { "value": "A. AWS Service Health Dashboard.", "isCorrect": false },
    { "value": "B. AWS Management Console.", "isCorrect": false },
    { "value": "C. Amazon CloudWatch.", "isCorrect": false },
    { "value": "D. AWS Personal Health Dashboard.", "isCorrect": true }
  ],
  "correct_answer": ["D"]
},
{
  "id": 172,
  "tag": "Developer Tools",
  "sub_tag": "AWS Cloud Development Kit (CDK)",
  "question": "Which AWS service or feature can be used to call AWS Services from different programming languages?",
  "options": [
    { "value": "A. AWS Software Development Kit.", "isCorrect": true },
    { "value": "B. AWS Command Line Interface.", "isCorrect": false },
    { "value": "C. AWS CodeDeploy.", "isCorrect": false },
    { "value": "D. AWS Management Console.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 173,
  "tag": "Networking and Content Delivery",
  "sub_tag": "Amazon Route S3",
  "question": "Which AWS Service can be used to register a new domain name?",
  "options": [
    { "value": "A. Amazon Personalize.", "isCorrect": false },
    { "value": "B. Amazon Route 53.", "isCorrect": true },
    { "value": "C. AWS KMS.", "isCorrect": false },
    { "value": "D. AWS Config.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 174,
  "tag": "Management and Governance",
  "sub_tag": "AWS CloudFormation",
  "question": "App development companies move their business to AWS to reduce time-to-market and improve customer satisfaction, what are the AWS automation tools that help them deploy their applications faster? (Choose TWO)",
  "options": [
    { "value": "A. AWS CloudFormation.", "isCorrect": true },
    { "value": "B. AWS Migration Hub.", "isCorrect": false },
    { "value": "C. AWS IAM.", "isCorrect": false },
    { "value": "D. AWS Elastic Beanstalk.", "isCorrect": true },
    { "value": "E. Amazon Macie.", "isCorrect": false }
  ],
  "correct_answer": ["A", "D"]
},
{
  "id": 175,
  "tag": "Cloud Financial Management",
  "sub_tag": "AWS Trusted Advisor",
  "question": "Which AWS service provides cost-optimization recommendations?",
  "options": [
    { "value": "A. AWS Trusted Advisor.", "isCorrect": true },
    { "value": "B. AWS Pricing Calculator.", "isCorrect": false },
    { "value": "C. Amazon QuickSight.", "isCorrect": false },
    { "value": "D. AWS X-Ray.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
{
  "id": 176,
  "tag": "Networking and Content Delivery",
  "sub_tag": "Amazon VPC",
  "question": "A company has hundreds of VPCs in multiple AWS Regions worldwide. What service does AWS offer to simplify the connection management among the VPCs?",
  "options": [
    { "value": "A. VPC Peering.", "isCorrect": false },
    { "value": "B. AWS Transit Gateway.", "isCorrect": true },
    { "value": "C. Amazon Connect.", "isCorrect": false },
    { "value": "D. Security Groups.", "isCorrect": false }
  ],
  "correct_answer": ["B"]
},
{
  "id": 177,
  "tag": "Compute",
  "sub_tag": "Amazon EC2",
  "question": "What is one benefit and one drawback of buying a reserved EC2 instance? (Select TWO)",
  "options": [
    { "value": "A. Instances can be shut down by AWS at any time with no notification.", "isCorrect": false },
    { "value": "B. Reserved instances require at least a one-year pricing commitment.", "isCorrect": true },
    { "value": "C. There is no additional charge for using dedicated instances.", "isCorrect": false },
    { "value": "D. Reserved instances provide a significant discount compared to on-demand instances.", "isCorrect": true },
    { "value": "E.Reserved instances are best suited for periodic workloads.", "isCorrect": false }
  ],
  "correct_answer": ["B", "D"]
},
{
  "id": 178,
  "tag": "Serverless",
  "sub_tag": "Best Practices",
  "question": "Why does every AWS Region contain multiple Availability Zones?",
  "options": [
    { "value": "A. Multiple Availability Zones allows you to build resilient and highly available architectures.", "isCorrect": true },
    { "value": "B. Multiple Availability Zones results in lower total cost compared to deploying in a single Availability Zone.", "isCorrect": false },
    { "value": "C. Multiple Availability Zones allows for data replication and global reach.", "isCorrect": false },
    { "value": "D. Multiple Availability Zones within a region increases the storage capacity available in that region.", "isCorrect": false }
  ],
  "correct_answer": ["A"]
},
  {
    "id": 179,
    "tag": "Cloud Adoption Framework",
    "sub_tag": "Business",
    "question": "Which of the following best describes the focus of the Business perspective in the Cloud Adoption Framework?",
    "options": [
      { "value": "A. Aligning IT strategies with business strategies.", "isCorrect": true },
      { "value": "B. Ensuring data encryption and network security.", "isCorrect": false },
      { "value": "C. Managing cloud infrastructure costs.", "isCorrect": false },
      { "value": "D. Automating deployment processes.", "isCorrect": false }
    ],
    "correct_answer": ["A"]
  },
  {
    "id": 180,
    "tag": "Cloud Adoption Framework",
    "sub_tag": "Business",
    "question": "The Business perspective in the Cloud Adoption Framework deals primarily with which of the following?",
    "options": [
      { "value": "A. Data encryption.", "isCorrect": false },
      { "value": "B. Network security.", "isCorrect": false },
      { "value": "C. Aligning IT and business strategies.", "isCorrect": true },
      { "value": "D. Automating CI/CD pipelines.", "isCorrect": false }
    ],
    "correct_answer": ["C"]
  },
  {
    "id": 181,
    "tag": "Cloud Adoption Framework",
    "sub_tag": "People",
    "question": "Which of the following focuses on ensuring that the workforce has the skills needed to support cloud adoption?",
    "options": [
      { "value": "A. Business perspective.", "isCorrect": false },
      { "value": "B. People perspective.", "isCorrect": true },
      { "value": "C. Governance perspective.", "isCorrect": false },
      { "value": "D. Operations perspective.", "isCorrect": false }
    ],
    "correct_answer": ["B"]
  },
  {
    "id": 182,
    "tag": "Cloud Adoption Framework",
    "sub_tag": "People",
    "question": "The People perspective includes which of the following activities?",
    "options": [
      { "value": "A. Ensuring data encryption.", "isCorrect": false },
      { "value": "B. Aligning IT with business strategies.", "isCorrect": false },
      { "value": "C. Developing a skilled workforce.", "isCorrect": true },
      { "value": "D. Managing cloud infrastructure costs.", "isCorrect": false }
    ],
    "correct_answer": ["C"]
  },
  {
    "id": 183,
    "tag": "Cloud Adoption Framework",
    "sub_tag": "Governance",
    "question": "Which perspective in the Cloud Adoption Framework focuses on aligning projects with business goals?",
    "options": [
      { "value": "A. Governance perspective.", "isCorrect": true },
      { "value": "B. Security perspective.", "isCorrect": false },
      { "value": "C. Platform perspective.", "isCorrect": false },
      { "value": "D. Operations perspective.", "isCorrect": false }
    ],
    "correct_answer": ["A"]
  },
  {
    "id": 184,
    "tag": "Cloud Adoption Framework",
    "sub_tag": "Governance",
    "question": "The Governance perspective in the Cloud Adoption Framework is primarily concerned with which of the following?",
    "options": [
      { "value": "A. Managing security policies.", "isCorrect": false },
      { "value": "B. Ensuring compliance and aligning projects with business goals.", "isCorrect": true },
      { "value": "C. Developing a skilled workforce.", "isCorrect": false },
      { "value": "D. Automating deployment processes.", "isCorrect": false }
    ],
    "correct_answer": ["B"]
  },
  {
    "id": 185,
    "tag": "Cloud Adoption Framework",
    "sub_tag": "Platform",
    "question": "Which perspective focuses on designing, deploying, and managing cloud environments?",
    "options": [
      { "value": "A. Business perspective.", "isCorrect": false },
      { "value": "B. People perspective.", "isCorrect": false },
      { "value": "C. Platform perspective.", "isCorrect": true },
      { "value": "D. Operations perspective.", "isCorrect": false }
    ],
    "correct_answer": ["C"]
  },
  {
    "id": 186,
    "tag": "Cloud Adoption Framework",
    "sub_tag": "Platform",
    "question": "The Platform perspective includes which of the following activities?",
    "options": [
      { "value": "A. Ensuring data encryption.", "isCorrect": false },
      { "value": "B. Aligning IT with business strategies.", "isCorrect": false },
      { "value": "C. Designing and managing cloud environments.", "isCorrect": true },
      { "value": "D. Developing a skilled workforce.", "isCorrect": false }
    ],
    "correct_answer": ["C"]
  },
  {
    "id": 187,
    "tag": "Cloud Adoption Framework",
    "sub_tag": "Operations",
    "question": "Which perspective in the Cloud Adoption Framework focuses on day-to-day operations and management?",
    "options": [
      { "value": "A. Business perspective.", "isCorrect": false },
      { "value": "B. People perspective.", "isCorrect": false },
      { "value": "C. Governance perspective.", "isCorrect": false },
      { "value": "D. Operations perspective.", "isCorrect": true }
    ],
    "correct_answer": ["D"]
  },
  {
    "id": 188,
    "tag": "Cloud Adoption Framework",
    "sub_tag": "Operations",
    "question": "The Operations perspective is responsible for which of the following?",
    "options": [
      { "value": "A. Aligning IT strategies with business strategies.", "isCorrect": false },
      { "value": "B. Managing day-to-day cloud operations.", "isCorrect": true },
      { "value": "C. Ensuring data encryption.", "isCorrect": false },
      { "value": "D. Developing a skilled workforce.", "isCorrect": false }
    ],
    "correct_answer": ["B"]
  },
  {
    "id": 189,
    "tag": "Cloud Adoption Framework",
    "sub_tag": "Security",
    "question": "Which perspective focuses on protecting data, applications, and infrastructure?",
    "options": [
      { "value": "A. Governance perspective.", "isCorrect": false },
      { "value": "B. People perspective.", "isCorrect": false },
      { "value": "C. Security perspective.", "isCorrect": true },
      { "value": "D. Operations perspective.", "isCorrect": false }
    ],
    "correct_answer": ["C"]
  },
  {
    "id": 190,
    "tag": "Cloud Adoption Framework",
    "sub_tag": "Security",
    "question": "The Security perspective includes which of the following activities?",
    "options": [
      { "value": "A. Aligning IT strategies with business strategies.", "isCorrect": false },
      { "value": "B. Protecting data and managing security policies.", "isCorrect": true },
      { "value": "C. Developing a skilled workforce.", "isCorrect": false },
      { "value": "D. Automating deployment processes.", "isCorrect": false }
    ],
    "correct_answer": ["B"]
  },
  {
    "id": 191,
    "tag": "Security, Identity, and Compliance",
    "sub_tag": "AWS Macie",
    "question": "A user needs to automatically discover, classify, and protect sensitive data stored in Amazon S3. Which AWS service can meet these requirements?",
    "options": [
      { "value": "A. AWS Macie", "isCorrect": true },
      { "value": "B. Amazon GuardDuty", "isCorrect": false },
      { "value": "C. AWS WAF", "isCorrect": false },
      { "value": "D. AWS CloudTrail", "isCorrect": false }
    ],
    "correct_answer": ["A"]
  },
  {
    "id": 192,
    "tag": "Mangement and Governance",
    "sub_tag": "AWS CloudTrail",
    "question": "A company needs to monitor and receive alerts about AWS Management Console sign-in events that involve the AWS account root user. Which AWS service can meet these requirements?",
    "options": [
      { "value": "A. Amazon CloudWatch", "isCorrect": false },
      { "value": "B. AWS Config", "isCorrect": false },
      { "value": "C. AWS CloudTrail", "isCorrect": true },
      { "value": "D. AWS Trusted Advisor", "isCorrect": false }
    ],
    "correct_answer": ["C"]
  },
  {
    "id": 193,
    "tag": "Storage",
    "sub_tag": "S3",
    "question": "Which of the functionalities are characteristics of Amazon S3? (Select TWO.)",
    "options": [
      { "value": "A. Object storage", "isCorrect": true },
      { "value": "B. Block storage", "isCorrect": false },
      { "value": "C. File storage", "isCorrect": false },
      { "value": "D. Lifecycle management", "isCorrect": true },
      { "value": "E. Virtual private network", "isCorrect": false }
    ],
    "correct_answer": ["A", "D"]
  },
  {
    "id": 194,
    "tag": "Management and Governance",
    "sub_tag": "AWS Organizations",
    "question": "Each department within a company has its own independent AWS account and its own payment method. The company needs to centralize departmental governance and reduce costs. Which AWS service will meet these requirements?",
    "options": [
      { "value": "A. AWS Organizations", "isCorrect": true },
      { "value": "B. AWS Control Tower", "isCorrect": false },
      { "value": "C. AWS Budgets", "isCorrect": false },
      { "value": "D. AWS Cost Explorer", "isCorrect": false }
    ],
    "correct_answer": ["A"]
  },
  {
    "id": 195,
    "tag": "Serverless",
    "sub_tag": "AWS Lambda",
    "question": "How does AWS charge for AWS Lambda usage once the free tier has been exceeded? (Select TWO.)",
    "options": [
      { "value": "A. By the number of requests", "isCorrect": true },
      { "value": "B. By the amount of memory allocated", "isCorrect": false },
      { "value": "C. By the amount of time the code executes", "isCorrect": true },
      { "value": "D. By the number of instances used", "isCorrect": false },
      { "value": "E. By the amount of storage used", "isCorrect": false }
    ],
    "correct_answer": ["A", "C"]
  },
  {
    "id": 196,
    "tag": "Database",
    "sub_tag": "Amazon RDS",
    "question": "A user deploys an Amazon RDS DB instance in multiple Availability Zones. This strategy involves which pillar of the AWS Well-Architected Framework?",
    "options": [
      { "value": "A. Operational Excellence", "isCorrect": false },
      { "value": "B. Security", "isCorrect": false },
      { "value": "C. Reliability", "isCorrect": true },
      { "value": "D. Cost Optimization", "isCorrect": false }
    ],
    "correct_answer": ["C"]
  },
  {
    "id": 197,
    "tag": "Networking and Content Delivery",
    "sub_tag": "AWS Direct Connect",
    "question": "A company wants to establish a consistent and private connection from the company's on-premises data center to the AWS Cloud. Which AWS service will meet this requirement?",
    "options": [
      { "value": "A. AWS VPN", "isCorrect": false },
      { "value": "B. AWS Direct Connect", "isCorrect": true },
      { "value": "C. Amazon CloudFront", "isCorrect": false },
      { "value": "D. Amazon Route 53", "isCorrect": false }
    ],
    "correct_answer": ["B"]
  },
  {
    "id": 198,
    "tag": "Management and Governance",
    "sub_tag": "AWS Trusted Advisor",
    "question": "Which AWS service identifies security groups that allow unrestricted access to a user's AWS resources?",
    "options": [
      { "value": "A. AWS Trusted Advisor", "isCorrect": true },
      { "value": "B. AWS Shield", "isCorrect": false },
      { "value": "C. AWS WAF", "isCorrect": false },
      { "value": "D. AWS Config", "isCorrect": false }
    ],
    "correct_answer": ["A"]
  },
  {
    "id": 199,
    "tag": "Databases",
    "sub_tag": "Amazon RDS",
    "question": "A company requires a relational database on AWS that records new customer orders from a website. Which AWS service or feature will meet this requirement?",
    "options": [
      { "value": "A. Amazon DynamoDB", "isCorrect": false },
      { "value": "B. Amazon RDS", "isCorrect": true },
      { "value": "C. Amazon Redshift", "isCorrect": false },
      { "value": "D. Amazon S3", "isCorrect": false }
    ],
    "correct_answer": ["B"]
  },
  {
    "id": 200,
    "tag": "Developer Tools",
    "sub_tag": "AWS CodeCommit",
    "question": "A company is moving all of their development activities to AWS. The company wants a solution to store and manage their developers' source code. Which AWS service will meet this requirement?",
    "options": [
      { "value": "A. AWS CodePipeline", "isCorrect": false },
      { "value": "B. AWS CodeDeploy", "isCorrect": false },
      { "value": "C. AWS CodeCommit", "isCorrect": true },
      { "value": "D. AWS CodeBuild", "isCorrect": false }
    ],
    "correct_answer": ["C"]
  }
  
  
  
  
  
  
  
  
  
  







































































































]







