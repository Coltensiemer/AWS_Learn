[
  {
    id: 1,
    tag: 'EC2',
    question: 'What is AWS EC2 primarily used for?',
    options: [
      { value: 'A. Storing data', isCorrect: false },
      { value: 'B. Running virtual servers in the cloud', isCorrect: true },
      { value: 'C. Managing DNS records', isCorrect: false },
      { value: 'D. Distributing content globally', isCorrect: false },
    ],
    correct_answer: 'B',
  },
  {
    id: 2,
    tag: 'EC2',
    question:
      'Which of the following instance types provides the highest level of compute power in AWS EC2?',
    options: [
      { value: 'A. T2', isCorrect: false },
      { value: 'B. M5', isCorrect: true },
      { value: 'C. C4', isCorrect: false },
      { value: 'D. R3', isCorrect: false },
    ],
    correct_answer: 'B',
  },
  {
    id: 3,
    tag: 'EC2',
    question:
      'What is an EC2 instance type that is optimized for memory-intensive applications?',
    options: [
      { value: 'A. T2', isCorrect: false },
      { value: 'B. M5', isCorrect: false },
      { value: 'C. X1', isCorrect: true },
      { value: 'D. C4', isCorrect: false },
    ],
    correct_answer: 'C',
  },
  {
    id: 4,
    tag: 'Lambda',
    question: 'What is AWS Lambda?',
    options: [
      { value: 'A. A database service', isCorrect: false },
      { value: 'B. A serverless computing service', isCorrect: true },
      { value: 'C. A networking service', isCorrect: false },
      { value: 'D. A storage service', isCorrect: false },
    ],
    correct_answer: 'B',
  },
  {
    id: 5,
    tag: 'Lambda',
    question:
      'What is the maximum execution time allowed for a single invocation of an AWS Lambda function?',
    options: [
      { value: 'A. 1 minute', isCorrect: false },
      { value: 'B. 5 minutes', isCorrect: true },
      { value: 'C. 15 minutes', isCorrect: false },
      { value: 'D. 30 minutes', isCorrect: false },
    ],
    correct_answer: 'B',
  },
  {
    id: 6,
    tag: 'Lambda',
    question: 'Which programming languages are supported by AWS Lambda?',
    options: [
      { value: 'A. Java only', isCorrect: false },
      {
        value: 'B. JavaScript/Node.js, Python, Java, Ruby, Go, .NET Core',
        isCorrect: true,
      },
      { value: 'C. JavaScript/Node.js only', isCorrect: false },
      { value: 'D. Python only', isCorrect: false },
    ],
    correct_answer: 'B',
  },
  {
    id: 7,
    tag: 'S3',
    question: 'What is AWS S3 primarily used for?',
    options: [
      { value: 'A. Running virtual servers in the cloud', isCorrect: false },
      { value: 'B. Storing and retrieving data objects', isCorrect: true },
      { value: 'C. Managing DNS records', isCorrect: false },
      { value: 'D. Running containerized applications', isCorrect: false },
    ],
    correct_answer: 'B',
  },
  {
    id: 8,
    tag: 'S3',
    question:
      'What is the maximum size of an individual object that can be stored in AWS S3?',
    options: [
      { value: 'A. 5 GB', isCorrect: false },
      { value: 'B. 10 GB', isCorrect: false },
      { value: 'C. 5 TB', isCorrect: true },
      { value: 'D. 10 TB', isCorrect: false },
    ],
    correct_answer: 'C',
  },
  {
    id: 9,
    tag: 'S3',
    question: 'What storage classes are available in AWS S3?',
    options: [
      {
        value: 'A. Standard, Reduced Redundancy Storage (RRS), Glacier',
        isCorrect: true,
      },
      { value: 'B. Standard, Glacier, Deep Archive', isCorrect: false },
      {
        value:
          'C. Standard, Reduced Redundancy Storage (RRS), Infrequent Access (IA)',
        isCorrect: false,
      },
      {
        value: 'D. Standard, Glacier, Infrequent Access (IA)',
        isCorrect: false,
      },
    ],
    correct_answer: 'A',
  },
  {
    id: 10,
    tag: 'RDS',
    question: 'What is Amazon RDS?',
    options: [
      { value: 'A. A content delivery network', isCorrect: false },
      { value: 'B. A managed relational database service', isCorrect: true },
      { value: 'C. A serverless computing service', isCorrect: false },
      { value: 'D. A container orchestration service', isCorrect: false },
    ],
    correct_answer: 'B',
  },
  {
    id: 11,
    tag: 'RDS',
    question: 'Which database engines are supported by Amazon RDS?',
    options: [
      {
        value:
          'A. MySQL, PostgreSQL, Oracle, SQL Server, MariaDB, Amazon Aurora',
        isCorrect: true,
      },
      { value: 'B. MySQL, PostgreSQL, SQL Server', isCorrect: false },
      { value: 'C. MySQL, MongoDB, Oracle', isCorrect: false },
      { value: 'D. PostgreSQL, SQL Server, MariaDB', isCorrect: false },
    ],
    correct_answer: 'A',
  },
  {
    id: 12,
    tag: 'RDS',
    question: 'What is Multi-AZ deployment in Amazon RDS?',
    options: [
      {
        value:
          'A. A deployment strategy for deploying containers across multiple availability zones',
        isCorrect: false,
      },
      {
        value:
          'B. A configuration option that allows you to deploy your database across multiple availability zones for high availability',
        isCorrect: true,
      },
      {
        value: 'C. A managed service for orchestrating data pipelines',
        isCorrect: false,
      },
      {
        value: 'D. A storage class for storing infrequently accessed data',
        isCorrect: false,
      },
    ],
    correct_answer: 'B',
  },
  {
    id: 13,
    tag: 'RDS',
    question:
      'What is the primary advantage of using Amazon RDS over managing your own database infrastructure?',
    options: [
      { value: 'A. Lower cost', isCorrect: false },
      {
        value: 'B. More control over the database environment',
        isCorrect: false,
      },
      { value: 'C. Simplified management tasks', isCorrect: true },
      { value: 'D. Faster database performance', isCorrect: false },
    ],
    correct_answer: 'C',
  },
  {
    id: 14,
    tag: 'RDS',
    question:
      'Which of the following features of Amazon RDS provides automatic backups of your database and enables point-in-time recovery?',
    options: [
      { value: 'A. Multi-AZ deployment', isCorrect: false },
      { value: 'B. Read replicas', isCorrect: false },
      { value: 'C. Automated backups', isCorrect: true },
      { value: 'D. Security groups', isCorrect: false },
    ],
    correct_answer: 'C',
  },
  {
    id: 15,
    tag: 'RDS',
    question: 'In Amazon RDS, what does Multi-AZ deployment provide?',
    options: [
      { value: 'A. Increased database performance', isCorrect: false },
      { value: 'B. Automatic scaling of read replicas', isCorrect: false },
      { value: 'C. High availability and failover support', isCorrect: true },
      { value: 'D. Data encryption at rest', isCorrect: false },
    ],
    correct_answer: 'C',
  },
  {
    id: 16,
    tag: 'RDS',
    question: 'Which database engine is not supported by Amazon RDS?',
    options: [
      { value: 'A. MySQL', isCorrect: false },
      { value: 'B. PostgreSQL', isCorrect: false },
      { value: 'C. MongoDB', isCorrect: true },
      { value: 'D. Oracle', isCorrect: false },
    ],
    correct_answer: 'C',
  },
  {
    id: 17,
    tag: 'RDS',
    question: 'What is Amazon Aurora?',
    options: [
      { value: 'A. A cloud-based data warehousing solution', isCorrect: false },
      { value: 'B. A fully managed NoSQL database service', isCorrect: false },
      {
        value:
          'C. A high-performance relational database engine compatible with MySQL and PostgreSQL',
        isCorrect: true,
      },
      {
        value: 'D. An AWS service for real-time data streaming',
        isCorrect: false,
      },
    ],
    correct_answer: 'C',
  },
  {
    id: 18,
    tag: 'RDS',
    question:
      'What is the maximum size of a PostgreSQL database instance in Amazon RDS?',
    options: [
      { value: 'A. 100 GB', isCorrect: false },
      { value: 'B. 500 GB', isCorrect: false },
      { value: 'C. 1 TB', isCorrect: false },
      { value: 'D. 16 TB', isCorrect: true },
    ],
    correct_answer: 'D',
  },
  {
    id: 19,
    tag: 'RDS',
    question:
      'Which AWS service allows you to monitor and manage your Amazon RDS instances through a web-based interface?',
    options: [
      { value: 'A. AWS CloudFormation', isCorrect: false },
      { value: 'B. AWS CLI', isCorrect: false },
      { value: 'C. Amazon RDS Console', isCorrect: true },
      { value: 'D. AWS CloudWatch', isCorrect: false },
    ],
    correct_answer: 'C',
  },
  {
    id: 20,
    tag: 'RDS',
    question:
      'What feature of Amazon RDS allows you to horizontally scale read-heavy database workloads?',
    options: [
      { value: 'A. Multi-AZ deployment', isCorrect: false },
      { value: 'B. Automated backups', isCorrect: false },
      { value: 'C. Read replicas', isCorrect: true },
      { value: 'D. Database snapshots', isCorrect: false },
    ],
    correct_answer: 'C',
  },
  // {
  //   id: 21,
  //   tag: 'RDS',
  //   question: 'How does Amazon RDS handle database software patching?',
  //   options: [
  //     {
  //       value:
  //         'A. Automatically applies patches during scheduled maintenance windows',
  //       isCorrect: true,
  //     },
  //     {
  //       value: 'B. Requires manual intervention from the user',
  //       isCorrect: false,
  //     },
  //     {
  //       value: 'C. Does not support database software patching',
  //       isCorrect: false,
  //     },
  //     {
  //       value: 'D. Provides a separate service for patch management',
  //       isCorrect: false,
  //     },
  //   ],
  //   correct_answer: 'A',
  // },
	// {
  //   "id": 22,
  //   "tag": "RDS",
  //   "question": "Which AWS service provides automated monitoring and logging capabilities for Amazon RDS?",
  //   "options": [
  //     { "value": "A. AWS CloudTrail", "isCorrect": false },
  //     { "value": "B. Amazon CloudWatch", "isCorrect": true },
  //     { "value": "C. AWS Config", "isCorrect": false },
  //     { "value": "D. AWS X-Ray", "isCorrect": false }
  //   ],
  //   "correct_answer": "B"
  // },
  // {
  //   "id": 23,
  //   "tag": "RDS",
  //   "question": "What does AWS Data Migration Service (DMS) help with regarding Amazon RDS?",
  //   "options": [
  //     { "value": "A. It helps migrate data from on-premises databases to Amazon RDS", "isCorrect": true },
  //     { "value": "B. It provides real-time data synchronization between Amazon RDS instances", "isCorrect": false },
  //     { "value": "C. It assists with schema design for Amazon RDS databases", "isCorrect": false },
  //     { "value": "D. It automates the creation of database snapshots in Amazon RDS", "isCorrect": false }
  //   ],
  //   "correct_answer": "A"
  // },
  // {
  //   "id": 24,
  //   "tag": "RDS",
  //   "question": "How does Amazon RDS support encryption of data at rest?",
  //   "options": [
  //     { "value": "A. It automatically encrypts all data by default", "isCorrect": false },
  //     { "value": "B. It provides options to enable encryption using AWS Key Management Service (KMS)", "isCorrect": true },
  //     { "value": "C. It requires manual encryption of data before storing it in RDS", "isCorrect": false },
  //     { "value": "D. Encryption of data at rest is not supported in Amazon RDS", "isCorrect": false }
  //   ],
  //   "correct_answer": "B"
  // },
  // {
  //   "id": 25,
  //   "tag": "RDS",
  //   "question": "What is the maximum number of read replicas that can be created for an Amazon RDS instance?",
  //   "options": [
  //     { "value": "A. 5", "isCorrect": false },
  //     { "value": "B. 10", "isCorrect": false },
  //     { "value": "C. 15", "isCorrect": false },
  //     { "value": "D. 20", "isCorrect": true }
  //   ],
  //   "correct_answer": "D"
  // },
  // {
  //   "id": 26,
  //   "tag": "RDS",
  //   "question": "Which AWS service provides a fully managed Redis or Memcached-compatible in-memory data store service?",
  //   "options": [
  //     { "value": "A. Amazon ElastiCache", "isCorrect": true },
  //     { "value": "B. Amazon Redshift", "isCorrect": false },
  //     { "value": "C. Amazon DynamoDB", "isCorrect": false },
  //     { "value": "D. AWS Glue", "isCorrect": false }
  //   ],
  //   "correct_answer": "A"
  // },
	// 	{
	// 		"id": 27,
	// 		"tag": "S3",
	// 		"question": "What does S3 stand for in Amazon S3?",
	// 		"options": [
	// 			{ "value": "A. Secure Storage Service", "isCorrect": false },
	// 			{ "value": "B. Simple Storage Service", "isCorrect": true },
	// 			{ "value": "C. Scalable Storage Service", "isCorrect": false },
	// 			{ "value": "D. Swift Storage Service", "isCorrect": false }
	// 		],
	// 		"correct_answer": "B"
	// 	},
	// 	{
	// 		"id": 28,
	// 		"tag": "S3",
	// 		"question": "Which of the following is not a storage class offered by Amazon S3?",
	// 		"options": [
	// 			{ "value": "A. Standard", "isCorrect": false },
	// 			{ "value": "B. Intelligent-Tiering", "isCorrect": false },
	// 			{ "value": "C. Glacier", "isCorrect": false },
	// 			{ "value": "D. Coldline", "isCorrect": true }
	// 		],
	// 		"correct_answer": "D"
	// 	},
	// 	{
	// 		"id": 29,
	// 		"tag": "S3",
	// 		"question": "What is the maximum object size supported by Amazon S3?",
	// 		"options": [
	// 			{ "value": "A. 5 GB", "isCorrect": false },
	// 			{ "value": "B. 10 GB", "isCorrect": false },
	// 			{ "value": "C. 50 GB", "isCorrect": false },
	// 			{ "value": "D. 5 TB", "isCorrect": true }
	// 		],
	// 		"correct_answer": "D"
	// 	},
	// 	{
	// 		"id": 30,
	// 		"tag": "S3",
	// 		"question": "Which feature of Amazon S3 allows you to host static websites?",
	// 		"options": [
	// 			{ "value": "A. Object versioning", "isCorrect": false },
	// 			{ "value": "B. Access Control Lists (ACLs)", "isCorrect": false },
	// 			{ "value": "C. S3 Transfer Acceleration", "isCorrect": false },
	// 			{ "value": "D. S3 Static Website Hosting", "isCorrect": true }
	// 		],
	// 		"correct_answer": "D"
	// 	},
	// 	{
	// 		"id": 31,
	// 		"tag": "S3",
	// 		"question": "Which AWS service can be used to monitor and analyze access patterns for Amazon S3 buckets?",
	// 		"options": [
	// 			{ "value": "A. Amazon CloudWatch", "isCorrect": false },
	// 			{ "value": "B. AWS X-Ray", "isCorrect": false },
	// 			{ "value": "C. AWS Config", "isCorrect": false },
	// 			{ "value": "D. Amazon S3 Access Analyzer", "isCorrect": true }
	// 		],
	// 		"correct_answer": "D"
	// 	},
	// 	{
	// 		"id": 32,
	// 		"tag": "S3",
	// 		"question": "What is the default encryption mechanism used by Amazon S3?",
	// 		"options": [
	// 			{ "value": "A. Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3)", "isCorrect": true },
	// 			{ "value": "B. Server-Side Encryption with AWS Key Management Service (SSE-KMS)", "isCorrect": false },
	// 			{ "value": "C. Client-Side Encryption", "isCorrect": false },
	// 			{ "value": "D. No encryption is provided by default", "isCorrect": false }
	// 		],
	// 		"correct_answer": "A"
	// 	},
	// 	{
	// 		"id": 33,
	// 		"tag": "S3",
	// 		"question": "What is the maximum number of buckets that can be created per AWS account in Amazon S3 by default?",
	// 		"options": [
	// 			{ "value": "A. 50", "isCorrect": false },
	// 			{ "value": "B. 100", "isCorrect": false },
	// 			{ "value": "C. 150", "isCorrect": false },
	// 			{ "value": "D. 1000", "isCorrect": true }
	// 		],
	// 		"correct_answer": "D"
	// 	},
	// 	{
	// 		"id": 34,
	// 		"tag": "S3",
	// 		"question": "Which AWS service can be integrated with Amazon S3 to automatically archive objects to Glacier?",
	// 		"options": [
	// 			{ "value": "A. Amazon CloudFront", "isCorrect": false },
	// 			{ "value": "B. AWS Snowball", "isCorrect": false },
	// 			{ "value": "C. Amazon S3 Glacier", "isCorrect": false },
	// 			{ "value": "D. Amazon S3 Lifecycle Policies", "isCorrect": true }
	// 		],
	// 		"correct_answer": "D"
	// 	},
	// 	{
	// 		"id": 35,
	// 		"tag": "S3",
	// 		"question": "What does S3 Transfer Acceleration optimize?",
	// 		"options": [
	// 			{ "value": "A. Latency for object retrieval", "isCorrect": false },
	// 			{ "value": "B. Data transfer speed to and from S3", "isCorrect": true },
	// 			{ "value": "C. Bucket creation time", "isCorrect": false },
	// 			{ "value": "D. Bucket permissions management", "isCorrect": false }
	// 		],
	// 		"correct_answer": "B"
	// 	},
	// 	{
	// 		"id": 36,
	// 		"tag": "S3",
	// 		"question": "What is the maximum number of requests per second per prefix supported by Amazon S3?",
	// 		"options": [
	// 			{ "value": "A. 1000", "isCorrect": false },
	// 			{ "value": "B. 5000", "isCorrect": false },
	// 			{ "value": "C. 10000", "isCorrect": false },
	// 			{ "value": "D. No limit", "isCorrect": true }
	// 		],
	// 		"correct_answer": "D"
	// 	},
	// 	{
	// 		"id": 37,
	// 		"tag": "S3",
	// 		"question": "Which feature of Amazon S3 allows you to track modifications to objects stored in a bucket?",
	// 		"options": [
	// 			{ "value": "A. Object tagging", "isCorrect": false },
	// 			{ "value": "B. Access Control Lists (ACLs)", "isCorrect": false },
	// 			{ "value": "C. Object versioning", "isCorrect": true },
	// 			{ "value": "D. Bucket policies", "isCorrect": false }
	// 		],
	// 		"correct_answer": "C"
	// 	},
	// 	{
	// 		"id": 38,
	// 		"tag": "S3",
	// 		"question": "Which AWS service can be used to automatically replicate objects across multiple AWS regions in Amazon S3?",
	// 		"options": [
	// 			{ "value": "A. Amazon S3 Cross-Region Replication", "isCorrect": true },
	// 			{ "value": "B. AWS Direct Connect", "isCorrect": false },
	// 			{ "value": "C. Amazon S3 Transfer Acceleration", "isCorrect": false },
	// 			{ "value": "D. AWS Snowball", "isCorrect": false }
	// 		],
	// 		"correct_answer": "A"
	// 	},
	// 	{
	// 		"id": 39,
	// 		"tag": "S3",
	// 		"question": "Which storage class of Amazon S3 is designed for long-term data archiving with retrieval times ranging from minutes to hours?",
	// 		"options": [
	// 			{ "value": "A. Standard-IA (Infrequent Access)", "isCorrect": false },
	// 			{ "value": "B. One Zone-IA (Infrequent Access)", "isCorrect": false },
	// 			{ "value": "C. Glacier", "isCorrect": true },
	// 			{ "value": "D. Intelligent-Tiering", "isCorrect": false }
	// 		],
	// 		"correct_answer": "C"
	// 	},
	// 	{
	// 		"id": 40,
	// 		"tag": "S3",
	// 		"question": "What feature of Amazon S3 allows you to restore deleted objects within a specified retention period?",
	// 		"options": [
	// 			{ "value": "A. Object tagging", "isCorrect": false },
	// 			{ "value": "B. Access Control Lists (ACLs)", "isCorrect": false },
	// 			{ "value": "C. Object versioning", "isCorrect": false },
	// 			{ "value": "D. Object retention policies", "isCorrect": true }
	// 		],
	// 		"correct_answer": "D"
	// 	},
	// 	{
	// 		"id": 41,
	// 		"tag": "S3",
	// 		"question": "Which AWS service can be used to analyze and visualize data stored in Amazon S3?",
	// 		"options": [
	// 			{ "value": "A. Amazon QuickSight", "isCorrect": true },
	// 			{ "value": "B. Amazon Athena", "isCorrect": false },
	// 			{ "value": "C. AWS Glue", "isCorrect": false },
	// 			{ "value": "D. AWS Data Pipeline", "isCorrect": false }
	// 		],
	// 		"correct_answer": "A"
	// 	},
	// 	{
	// 		"id": 42,
	// 		"tag": "S3",
	// 		"question": "What feature of Amazon S3 allows you to assign custom metadata to objects?",
	// 		"options": [
	// 			{ "value": "A. Object tagging", "isCorrect": false },
	// 			{ "value": "B. Access Control Lists (ACLs)", "isCorrect": false },
	// 			{ "value": "C. Object versioning", "isCorrect": false },
	// 			{ "value": "D. Object metadata", "isCorrect": true }
	// 		],
	// 		"correct_answer": "D"
	// 	},
	// 	{
	// 		"id": 43,
	// 		"tag": "S3",
	// 		"question": "What is the maximum number of tags that can be assigned to an object in Amazon S3?",
	// 		"options": [
	// 			{ "value": "A. 10", "isCorrect": false },
	// 			{ "value": "B. 20", "isCorrect": false },
	// 			{ "value": "C. 50", "isCorrect": false },
	// 			{ "value": "D. Unlimited", "isCorrect": true }
	// 		],
	// 		"correct_answer": "D"
	// 	},
	// 	{
	// 		"id": 44,
	// 		"tag": "S3",
	// 		"question": "What is the minimum file size for multipart uploads in Amazon S3?",
	// 		"options": [
	// 			{ "value": "A. 5 MB", "isCorrect": false },
	// 			{ "value": "B. 10 MB", "isCorrect": false },
	// 			{ "value": "C. 15 MB", "isCorrect": false },
	// 			{ "value": "D. There is no minimum file size", "isCorrect": true }
	// 		],
	// 		"correct_answer": "D"
	// 	},
	// 	{
	// 		"id": 45,
	// 		"tag": "S3",
	// 		"question": "Which AWS service can be used to automatically categorize objects stored in Amazon S3 based on their content?",
	// 		"options": [
	// 			{ "value": "A. Amazon Rekognition", "isCorrect": true },
	// 			{ "value": "B. Amazon Comprehend", "isCorrect": false },
	// 			{ "value": "C. Amazon Macie", "isCorrect": false },
	// 			{ "value": "D. Amazon Translate", "isCorrect": false }
	// 		],
	// 		"correct_answer": "A"
	// 	}	
];



