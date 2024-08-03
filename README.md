# TypeScript Refactor Exercises

#### This project contains some exercises intentionally made to be refactored but not corrected as they do not contain bugs.

### What are we looking for refactoring?

1. Improves the readability of the code.
2. Eliminates any unnecessary duplication.
3. Better organise class responsibilities.
4. Consider using more modern or efficient methods for array operations.

### Requeriments to run exercises

1. Create and go to folder project

   ```
   mkdir refactor
   ```

   ```
   cd refactor
   ```

2. Inicialize a node.js project

   ```
   npm init -y
   ```

3. Install typescript locally as a project dependency.

   ```
   npm install --save-dev typescript
   ```

4. Create and config tsconfig.json to separate transpilation directories

   ```
   npx tsc --init
   ```

   ```tsconfig.json
    {
    "compilerOptions": {
        "outDir": "./dist",                  // Output directory of compiled files
        "rootDir": "./src",                  // Root directory of TypeScript files
    },
    "include": [
        "src/**/*"                           // Include all TypeScript files into src directory
    ],
    "exclude": [
        "node_modules"                       // Exclude node_modules directory
        ]
    }
   ```

   ### Transpile TypeScript file

   ```
   npx tsc src/filename.ts
   ```

5. We can run TypeScript files without transpilation ( OPTIONAL )

   ```
   npm install ts-node --save-dev
   ```

   ### Run TypeScript file

   ```
   npx tsc-node src/filename.ts
   ```
