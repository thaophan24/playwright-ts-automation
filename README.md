# playwright-ts-automation

---


## Learn TypeScript Basics

### 1. Set Up Your Environment

#### Install Node.js and npm

Playwright requires Node.js (v14+). Download it from Node.js.org.

Verify installation:

```bash

node -v
npm -v

```

#### Initialize a Project

```bash

npm init -y

```

#### Install Playwright and TypeScript

```bash

npm install @playwright/test
npm install typescript --save-dev
npm install @types/node --save-dev

```

#### Configure TypeScript

Create tsconfig.json:

```bash

npx tsc --init

```

Copy and paste to tsconfig.json

```json

{
  "compilerOptions": {
    "target": "ESNext",
    "module": "CommonJS",
    "rootDir": "./tests",
    "outDir": "./out",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}

```

Reinstall dependencies (optional but safe):

```bash

rm -rf node_modules package-lock.json
npm install

```

