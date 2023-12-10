# Initialization Step

## Prerequisites

- Nx

## Steps

- Once Nx Project already set with empty project, start creating a `tsconfig.json` file on the root project
- `pnpm i @nx/react` to allow generate react recipe from empty nx project
- `nx g @nx/react:app inventories --bundler=vite --style=scss --e2eTestRunner=playwright --routing`
