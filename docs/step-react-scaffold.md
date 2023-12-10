# Initialization Step

## Prerequisites

- Nx

## Main

- Once Nx Project already set with empty project, start creating a `tsconfig.json` file on the root project
- `pnpm i @nx/react` to allow generate react recipe from empty nx project
- `nx g @nx/react:app inventories --bundler=vite --style=scss --e2eTestRunner=playwright --routing`

## Storybook

- Once React has been set up, install storybook nx plugin
- `pnpm i @nx/storybook`
- `nx g @nx/react:storybook-configuration inventories`
