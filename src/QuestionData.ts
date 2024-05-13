[{
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
  "correct_answer": "D"
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
  "correct_answer": "D"
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
  "correct_answer": "B"
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
  "correct_answer": "E"
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
  "correct_answer": "A"
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
  "correct_answer": "B"
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
  "correct_answer": "C"
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
  "correct_answer": "B"
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
  "correct_answer": "D"
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
  "correct_answer": "C"
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
  "correct_answer": "B"
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
  "correct_answer": "C"
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
  "correct_answer": "A, E"
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
  "correct_answer": "B"
},
{
  "id": 1,
  "tag": "Cloud Financial Management",
  "sub_tag": "AWS Cost and Usage Report",
  "question": "Which of the following helps a customer view the Amazon EC2 billing activity for the past month?",
  "options": [
    { "value": "A. AWS Budgets.", "isCorrect": false },
    { "value": "B. AWS Pricing Calculator.", "isCorrect": false },
    { "value": "C. AWS Systems Manager.", "isCorrect": false },
    { "value": "D. AWS Cost & Usage Reports.", "isCorrect": true }
  ],
  "correct_answer": "D"
},
{
  "id": 2,
  "tag": "Cloud Financial Management",
  "sub_tag": "Best Practices",
  "question": "What do you gain from setting up consolidated billing for five different AWS accounts under another master account?",
  "options": [
    { "value": "A. AWS services’ costs will be reduced to half the original price.", "isCorrect": false },
    { "value": "B. The consolidated billing feature is just for organizational purpose.", "isCorrect": true },
    { "value": "C. Each AWS account gets volume discounts.", "isCorrect": false },
    { "value": "D. Each AWS account gets five times the free-tier services capacity.", "isCorrect": false }
  ],
  "correct_answer": "B"
},
{
  "id": 3,
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
  "id": 4,
  "tag": "Management and Governance",
  "sub_tag": "",
  "question": "One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture’s design?",
  "options": [
    { "value": "A. By automatically scaling your on-premises resources based on changes in demand.", "isCorrect": false },
    { "value": "B. By automatically scaling your AWS resources using an Elastic Load Balancer.", "isCorrect": false },
    { "value": "C. By reducing interdependencies between application components wherever possible.", "isCorrect": false },
    { "value": "D. By automatically provisioning the required AWS resources based on changes in demand.", "isCorrect": true }
  ],
  "correct_answer": "D"
},
{
  "id": 5,
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
  "id": 1,
  "tag": "Networking and Content Delivery",
  "sub_tag": "Best Practices",
  "question": "What does Amazon CloudFront use to distribute content to global users with low latency?",
  "options": [
    { "value": "A. AWS Global Accelerator.", "isCorrect": false },
    { "value": "B. AWS Regions.", "isCorrect": false },
    { "value": "C. AWS Edge Locations.", "isCorrect": true },
    { "value": "D. AWS Availability Zones.", "isCorrect": false }
  ],
  "correct_answer": "C"
},
{
  "id": 2,
  "tag": "Security, Identity, and Compliance",
  "sub_tag": "Best Practices",
  "question": "What does the 'Principle of Least Privilege' refer to?",
  "options": [
    { "value": "A. You should grant your users only the permissions they need when they need them and nothing more.", "isCorrect": true },
    { "value": "B. All IAM users should have at least the necessary permissions to access the core AWS services.", "isCorrect": false },
    { "value": "C. All trusted IAM users should have access to any AWS service in the respective AWS account.", "isCorrect": false },
    { "value": "D. IAM users should not be granted any permissions; to keep your account safe.", "isCorrect": false }
  ],
  "correct_answer": "A"
},
{
  "id": 3,
  "tag": "Compute",
  "sub_tag": "Best Practices",
  "question": "Which of the following does NOT belong to the AWS Cloud Computing models?",
  "options": [
    { "value": "A. Platform as a Service (PaaS).", "isCorrect": false },
    { "value": "B. Infrastructure as a Service (IaaS).", "isCorrect": false },
    { "value": "C. Software as a Service (SaaS).", "isCorrect": false },
    { "value": "D. Networking as a Service (NaaS).", "isCorrect": true }
  ],
  "correct_answer": "D"
},
{
  "id": 4,
  "tag": "Storage",
  "sub_tag": "Amazon S3 Glacier",
  "question": "The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?",
  "options": [
    { "value": "A. S3 Intelligent-Tiering.", "isCorrect": false },
    { "value": "B. AWS Marketplace.", "isCorrect": false },
    { "value": "C. Amazon S3 Glacier Deep Archive.", "isCorrect": true },
    { "value": "D. Amazon EBS.", "isCorrect": false }
  ],
  "correct_answer": "C"
},
{
  "id": 5,
  "tag": "Networking and Content Delivery",
  "sub_tag": "Amazon Route 53",
  "question": "Which service provides DNS in the AWS cloud?",
  "options": [
    { "value": "A. Route 53.", "isCorrect": true },
    { "value": "B. AWS Config.", "isCorrect": false },
    { "value": "C. Amazon CloudFront.", "isCorrect": false },
    { "value": "D. Amazon EMR.", "isCorrect": false }
  ],
  "correct_answer": "A"
},
{
  "id": 6,
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
    "id": 1,
    "tag": "Storage",
    "sub_tag": "AWS Elastic Disaster Recovery",
    "question": "A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application’s response time is optimal?",
    "options": [
      { "value": "A. AWS OpsWorks.", "isCorrect": false },
      { "value": "B. AWS Storage Gateway.", "isCorrect": false },
      { "value": "C. Amazon EBS volume.", "isCorrect": false },
      { "value": "D. Amazon ElastiCache.", "isCorrect": true }
    ],
    "correct_answer": "D"
  },
  {
    "id": 2,
    "tag": "Compute",
    "sub_tag": "Amazon EC2",
    "question": "You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?",
    "options": [
      { "value": "A. Reserved instances.", "isCorrect": false },
      { "value": "B. Spot instances.", "isCorrect": false },
      { "value": "C. Dedicated instances.", "isCorrect": false },
      { "value": "D. On-demand instances.", "isCorrect": true }
    ],
    "correct_answer": "D"
  },
  {
    "id": 3,
    "tag": "Compute",
    "sub_tag": "Amazon EC2",
    "question": "You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?",
    "options": [
      { "value": "A. Reserved Instances.", "isCorrect": false },
      { "value": "B. On-demand Instances.", "isCorrect": false },
      { "value": "C. Dedicated Instances.", "isCorrect": false },
      { "value": "D. Spot Instances.", "isCorrect": true }
    ],
    "correct_answer": "D"
  },
  {
    "id": 4,
    "tag": "Networking and Content Delivery",
    "sub_tag": "Amazon CloudFront",
    "question": "Which of the following can be described as a global content delivery network (CDN) service?",
    "options": [
      { "value": "A. AWS VPN.", "isCorrect": false },
      { "value": "B. AWS Direct Connect.", "isCorrect": false },
      { "value": "C. AWS Regions.", "isCorrect": false },
      { "value": "D. Amazon CloudFront.", "isCorrect": true }
    ],
    "correct_answer": "D"
  },
  {
    "id": 5,
    "tag": "Security, Identity, and Compliance",
    "sub_tag": "AWS Artifact",
    "question": "Which of the following services allows customers to manage their agreements with AWS?",
    "options": [
      { "value": "A. AWS Artifact.", "isCorrect": true },
      { "value": "B. AWS Certificate Manager.", "isCorrect": false },
      { "value": "C. AWS Systems Manager.", "isCorrect": false },
      { "value": "D. AWS Organizations.", "isCorrect": false }
    ],
    "correct_answer": "A"
  },
  {
    "id": 1,
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
    "id": 2,
    "tag": "Database",
    "sub_tag": "Amazon DynamoDB",
    "question": "Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?",
    "options": [
      { "value": "A. Amazon Aurora.", "isCorrect": false },
      { "value": "B. Amazon DynamoDB.", "isCorrect": true },
      { "value": "C. Amazon Elastic Block Store.", "isCorrect": false },
      { "value": "D. Amazon Redshift.", "isCorrect": false }
    ],
    "correct_answer": "B"
  },
  {
    "id": 3,
    "tag": "Management and Governance",
    "sub_tag": "Technical Account Manager (TAM)",
    "question": "As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?",
    "options": [
      { "value": "A. AWS Identity and Access Management (IAM) user.", "isCorrect": false },
      { "value": "B. Infrastructure Event Management (IEM) engineer.", "isCorrect": false },
      { "value": "C. AWS Consulting Partners.", "isCorrect": false },
      { "value": "D. Technical Account Manager (TAM).", "isCorrect": true }
    ],
    "correct_answer": "D"
  },
  {
    "id": 4,
    "tag": "Cloud Financial Management",
    "sub_tag": "AWS Cost Explorer",
    "question": "How can you view the distribution of AWS spending in one of your AWS accounts?",
    "options": [
      { "value": "A. By using Amazon VPC console.", "isCorrect": false },
      { "value": "B. By contacting the AWS Support team.", "isCorrect": false },
      { "value": "C. By using AWS Cost Explorer.", "isCorrect": true },
      { "value": "D. By contacting the AWS Finance team.", "isCorrect": false }
    ],
    "correct_answer": "C"
  },
  {
    "id": 5,
    "tag": "Security, Identity, and Compliance",
    "sub_tag": "AWS Identity and Access Management (IAM)",
    "question": "Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?",
    "options": [
      { "value": "A. Access keys.", "isCorrect": true },
      { "value": "B. Secret token.", "isCorrect": false },
      { "value": "C. UserID.", "isCorrect": false },
      { "value": "D. User name and password.", "isCorrect": false }
    ],
    "correct_answer": "A"
  },
  {
    "id": 6,
    "tag": "Customer Engagement",
    "sub_tag": "AWS Support",
    "question": "You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?",
    "options": [
      { "value": "A. Contact the AWS Customer Service team.", "isCorrect": false },
      { "value": "B. Contact the AWS Abuse team.", "isCorrect": true },
      { "value": "C. Contact the AWS Concierge team.", "isCorrect": false },
      { "value": "D. Contact the AWS Security team.", "isCorrect": false }
    ],
    "correct_answer": "B"
  },
  {
    "id": 7,
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
    "id": 8,
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
    "id": 1,
    "tag": "Networking and Content Delivery",
    "sub_tag": "Amazon CloudFront",
    "question": "A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?",
    "options": [
      { "value": "A. Amazon SNS.", "isCorrect": false },
      { "value": "B. Amazon Kinesis Video Streams.", "isCorrect": false },
      { "value": "C. AWS CloudFormation.", "isCorrect": false },
      { "value": "D. Amazon CloudFront.", "isCorrect": true }
    ],
    "correct_answer": "D"
  },
  {
    "id": 2,
    "tag": "Database",
    "sub_tag": "Amazon Aurora",
    "question": "A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?",
    "options": [
      { "value": "A. A MySQL database installed on an EC2 instance.", "isCorrect": false },
      { "value": "B. Amazon Aurora.", "isCorrect": true },
      { "value": "C. Amazon DynamoDB.", "isCorrect": false },
      { "value": "D. Amazon Neptune.", "isCorrect": false }
    ],
    "correct_answer": "B"
  },
  {
    "id": 3,
    "tag": "Management and Governance",
    "sub_tag": "AWS CloudFormation",
    "question": "What is the AWS service that enables AWS architects to manage infrastructure as code?",
    "options": [
      { "value": "A. AWS CloudFormation.", "isCorrect": true },
      { "value": "B. AWS Config.", "isCorrect": false },
      { "value": "C. Amazon SES.", "isCorrect": false },
      { "value": "D. Amazon EMR.", "isCorrect": false }
    ],
    "correct_answer": "A"
  },
  {
    "id": 4,
    "tag": "Security, Identity, and Compliance",
    "sub_tag": "Best Practices",
    "question": "Under the shared responsibility model, which of the following is the responsibility of AWS?",
    "options": [
      { "value": "A. Client-side encryption.", "isCorrect": false },
      { "value": "B. Configuring infrastructure devices.", "isCorrect": false },
      { "value": "C. Server-side encryption.", "isCorrect": true },
      { "value": "D. Filtering traffic with Security Groups.", "isCorrect": false }
    ],
    "correct_answer": "C"
  },
  {
    "id": 5,
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
    "id": 6,
    "tag": "Management and Governance",
    "sub_tag": "Amazon CloudWatch",
    "question": "You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can’t reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?",
    "options": [
      { "value": "A. AWS Lambda.", "isCorrect": false },
      { "value": "B. AWS Config.", "isCorrect": false },
      { "value": "C. Amazon CloudWatch.", "isCorrect": true },
      { "value": "D. AWS CloudTrail.", "isCorrect": false }
    ],
    "correct_answer": "C"
  },
  {
    "id": 1,
    "tag": "Management and Governance",
    "sub_tag": "AWS Trusted Advisor",
    "question": "Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?",
    "options": [
      { "value": "A. AWS Shield.", "isCorrect": false },
      { "value": "B. AWS Management Console.", "isCorrect": false },
      { "value": "C. AWS Secrets Manager.", "isCorrect": false },
      { "value": "D. AWS Trusted Advisor.", "isCorrect": true }
    ],
    "correct_answer": "D"
  },
  {
    "id": 2,
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
    "id": 3,
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
    "id": 4,
    "tag": "Management and Governance",
    "sub_tag": "AWS Quick Start",
    "question": "What does AWS provide to deploy popular technologies such as IBM MQ on AWS with the least amount of effort and time?",
    "options": [
      { "value": "A. Amazon Aurora.", "isCorrect": false },
      { "value": "B. Amazon CloudWatch.", "isCorrect": false },
      { "value": "C. AWS Quick Start reference deployments.", "isCorrect": true },
      { "value": "D. AWS OpsWorks.", "isCorrect": false }
    ],
    "correct_answer": "C"
  },
  {
    "id": 5,
    "tag": "Compute",
    "sub_tag": "Amazon EC2",
    "question": "An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?",
    "options": [
      { "value": "A. Elastic RI.", "isCorrect": false },
      { "value": "B. Premium RI.", "isCorrect": false },
      { "value": "C. Standard RI.", "isCorrect": false },
      { "value": "D. Convertible RI.", "isCorrect": true }
    ],
    "correct_answer": "D"
  }

]







