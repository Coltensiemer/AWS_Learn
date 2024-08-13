# AWS Amplify

## Table of Contents

-   [Overview](#overview)
-   [Project Structure](#project-structure)
-   [Installation](#installation)
-   [Configuration](#configuration)
-   [Common Commands](#common-commands)
-   [Documentation](#documentation)

## Overview

This directory contains the configuration and setup files for AWS Amplify, which is used to develop and deploy the auth of this project.

Amplify is ran on GEN 2 and utilizes UI Library for AUTH hositing.

## Project Structure

```
.
├── ...
├── Amplify
│   ├── Auth
│   │   ├── resources.ts
│   │   ├── postconfirmation
│   │   │   ├── handler.ts
│   │   │   ├── resources.ts
│   ├── data
│   ├── utils
				|-- amplifyServerUtils.ts
│   ├── backend.ts ## configures the backend resources to exisiting VPC per CDK.
│   ├── package.json
│   ├── tsconfig.json
└── ...
```

## Installation

To install AWS Amplify CLI globally, run:

```
npm install -g @aws-amplify/cli

```

## Configuration

To configure your AWS credentials, run:

```
amplify configure

```

## Common Commands

To start sandbox, run:

```
npx ampx sandbox

```

## Documentation

For more detailed information, refer to the following resources:

-   [AWS Amplify ](https://docs.amplify.aws/nextjs/)
-   [AWS Amplify Sandbox](https://docs.amplify.aws/react/deploy-and-host/sandbox-environments/setup/)
