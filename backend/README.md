## Description

This backend folder contains AWS CLoud Development kit (cdk) and includeds an APIs for event driven architure. 


## Table of Contents

- [Prerequisites] (#prerequisites)
- [FolderStructure] (#folderstructure)
- [Installation](#installation)
- [Usage](#usage)
- [Documention] (#documention)
- [UsefulCommands] (#usefilCommands)



## Prerequisites

- [Node.js](https://nodejs.org/en/download/) (>= 20.x)
- [AWS CLI](https://aws.amazon.com/cli/)
- [AWS CDK](https://aws.amazon.com/cdk/)
- [AWS CDK Secret Manager]



## Folder Structure


- [api](#api)  # Contains the API handlers for different resources.
  - [authorize] (#authorize) # Handle JWT token for cognito authorization lambda
  - [quizzes](#quizzes)  # Handles quiz-related API requests.
  - [users](#users)  # Handles user-related API requests.
- [bin](#bin)  # Entry point for the CDK application, typically contains the script to initialize the CDK app.
- [events](#events)  # Contains test event payloads for local testing.
  - [event-post-user.json](#event-post-user-json)  # Sample event payload for user creation.
- [lib](#lib)  # Contains the CDK stack definitions and related resources.
  - [Backend-Stack.ts](#backend-stack-ts)  # Main stack definition file for the backend infrastructure.
- [test] (#test) # Contains additional test.
    - [users.test.ts](#users-test-ts)  # Test file for users API.
- [.gitignore](#gitignore)  # Specifies files and directories to be ignored by Git.
- [package.json](#package-json)  # Node.js project manifest, includes dependencies and scripts.
- [CDK.json](#cdk-json)  # CDK configuration file, defines the app entry point.
- [env.json](#env-json)  # Environment configuration file, stores environment-specific variables.
- [singleton.ts](#singleton-ts)  # Singleton pattern implementation for mock prisma. Creates one instance for mock testing.
- [tsconfig.json](#tsconfig-json)  # TypeScript configuration file, includes compiler options.
- [README.md](#readme-md)  # Documentation file for the project, contains instructions and information.



```
├── api
│ ├── authorizer
│ ├── quizzes
│ ├── users
├── bin
├── events
│ ├── event-post-user.json
├── lib
│ ├── Backend-Stack.ts
├── test
│ │ ├── users.test.ts
├── .gitignore
├── package.json
├── CDK.json
├── env.json
├── singleton.ts
├── tsconfig.json
├── README.md
``` 


## Useage


## Documention

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template
* `npx cdk destroy` destroys stack -- use for testing. 


