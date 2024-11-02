# Project Name

AWS Learn

## Description

This application is tool to study and learn for the AWS cerifications.
Users have the applility to select options on how they want their quiz and be able to see the results.

## Table of Contents

-   [FolderStructure] (#folderstructure)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Contributing](#contributing)
-   [License](#license)
-   [Credits](#credits)
-   [Contact](#contact)

## Folder Struture

-   [github] (#github) #The .github directory contains GitHub-specific configuration files, such as workflows for GitHub Actions.
-   [.next] (#next) # The .next directory is automatically generated by Next.js. It contains build artifacts, compiled assets, and other Next.js build-related files.
-   [.vscode] (#vscode) # The .vscode directory typically contains settings and configurations specific to Visual Studio Code, such as workspace settings and debug configurations.
-   [actions] (#actions) # The actions directory may contain scripts or files related to project actions, such as CI/CD pipelines or custom automation scripts.
-   [amplify] (#amplify) # The amplify directory that contains auth APIS.
-   [backend] (#backend) # The backend directory contains cdk for the VPC and the APIs for lambda functions.
-   [lib] (#lib) # The lib directory contains resuable code that is used for functionalities.
-   [prisma] (#prisma) # The prisma directory typically contains configuration and schema files for Prisma, a modern database toolkit.
-   [public] (#public) # The public directory contains static assets that are served directly by the web server, such as images, fonts, and other files.
-   [src] (#src) # The src directory is the main source directory of the project. It contains all the source code for the application.
    -   [app] (#app) # The app directory may contain higher-level application-specific modules or configurations.
    -   [components] (#components) # The components directory contains reusable React components used throughout the application.
    -   [functions] (#functions) # The functions directory may contain utility functions or helper functions used across different parts of the application.
    -   [stories] (#storybook) # The .storybook directory contains configuration files for Storybook, a tool for developing UI components in isolation.
    -   [useContext] (#useContext) # The useContext directory could contain custom React hooks using the Context API for managing global state.
    -   [useReducer] (#useReducer) # The useReducer directory may contain custom React hooks using the Reducer pattern for managing complex local state.
-   [components.json] (#componentsJson) # Used for shadcn for CLI commands.
-   [.eslintrc.json] (#eslint) #Configuration file for ESLint.
-   [package.json] (#package.json) #Project dependencies and scripts.
-   [tailwind.config.ts] (#tailwindconfig) # Configuration for Tailwind.
-   [tsconfig.json] (#tsconfig) # Configuration for Typescript.
-   [jsconfig.json] (#jsconfig) # Configuration for Javascript.
-   [jest.config.js] (#jestconfig) # Configuration for Jest.

## App

See Nextjs docs for project structure information: https://nextjs.org/docs/getting-started/project-structure

```
SRC
├── ...
├── App
│   ├── api
│   ├── options   # Routes for different options
│   │   ├── error
│   │   ├── layout
│   │   ├── page
│   │   │   ├── quiz  # Contains quiz-related pages
│   │   │   │   ├── error
│   │   │   │   ├── layout
│   │   │   │   ├── loading
│   │   │   │   └── page
│   │   │   ├── results  # Contains results-related pages
│   │   │   │   ├── column  # Contains object structure for data tables
│   │   │   │   ├── layout
│   │   │   │   ├── loading
│   │   │   │   └── page
|   ├── dashboard
|   ├── settings
│   ├── global.css
│   ├── layout.tsx  # Top-level layout component
│   └── page.tsx    # Top-level page component
└── ...
```

## Components

Componets strucuture are layout similar to the page routes structure under app.

```
SRC
├── ...
├── App
│   ├── api
│   ├── global.css
│   ├── layout.tsx  # Top-level layout component
│   ├── page.tsx    # Top-level page component
└── components
     ├── atomic   # Atomic design components
     ├── auth   # Auth components client/provider
     ├── home     # Home-related components
     ├── hooks   # Shadcn hooks for mobile media
     ├── options  # Components related to options
     ├── quiz     # Quiz-related component
     ├── results  # Results-related components
     ├── settings   # settings page components
     ├── footer   # Footer components
     ├── header   # Header components
     └── toast    # Toast components
└── ...
```

## Installation

1. Install Node.js and npm if not already installed.
2. Clone the repository:
   `
git clone <repository_url>`
3. Install dependencies:
   `
   npm install

## Usage

1. To start the development server, run:

```bash
   npm run dev
```

2. To build the project, run:

```bash
   npm run build
```

3. To start the production server, run:

```bash
   npm run start
```

4. Create a .env
   `DATABASE_URL="postgresql://{username}:{password}@localhost:{port}/{dbName}?schema=SCHEMA"`
5. How to seed developement DB run:

```bash
   npx prisma db seed
```

6. How to run StoryBook

```bash
   npm run storybook
```

7. Additional scripts:
    - `lint`: Run ESLint for linting.
    - `storybook`: Start Storybook development server.
    - `build-storybook`: Build Storybook static files.

## Contributing

If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure tests pass.
4. Commit your changes and push your branch to GitHub.
5. Open a pull request with a clear title and description.

## License

## Credits

Acknowledgements for any third-party libraries, resources, or individuals who contributed to the project.

-   [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)
-   [class-variance-authority](https://www.npmjs.com/package/class-variance-authority)
-   [clsx](https://www.npmjs.com/package/clsx)
-   [lucide-react](https://www.npmjs.com/package/lucide-react)
-   [next](https://www.npmjs.com/package/next)
-   [react](https://www.npmjs.com/package/react)
-   [react-dom](https://www.npmjs.com/package/react-dom)
-   [react-hook-form](https://www.npmjs.com/package/react-hook-form)
-   [shadcn] (https://ui.shadcn.com/)
-   [storybook] (https://storybook.js.org/)
-   [tailwind-merge](https://www.npmjs.com/package/tailwind-merge)
-   [tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate)
-   [zod](https://www.npmjs.com/package/zod)

## Contact

For questions or inquiries, please contact Colten Siemer at colten50@hotmail.com.
