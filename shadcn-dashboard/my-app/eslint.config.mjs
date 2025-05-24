import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Define files to ignore (replacing .eslintignore)
const ignores = [
  // Build artifacts
  '.next/**',
  'out/**',
  'dist/**',
  'build/**',
  
  // Node modules
  'node_modules/**',
  
  // Coverage reports
  'coverage/**',
  
  // Configuration files
  'next-env.d.ts',
  'next.config.ts',
  'tailwind.config.ts',
  'postcss.config.mjs',
  '*.config.js',
  '*.config.mjs',
  
  // Type declarations
  '*.d.ts',
  
  // Public assets
  'public/**',
  
  // Cache files
  '.eslintcache',
  '.vercel/**',
  '.swc/**',
  
  // Generated files
  'eslint-report.html',
];

const eslintConfig = [
  { ignores },
  // Base configurations
  ...compat.extends(
    "next/core-web-vitals", 
    "next/typescript",
    "plugin:react/recommended", 
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended"
  ),
  
  // Global settings
  {
    settings: {
      react: {
        version: "detect"
      },
      "import/resolver": {
        typescript: true,
        node: true
      }
    }
  },
  
  // Global rules
  {
    rules: {
      // React rules
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "react/prop-types": "off", // Use TypeScript for prop validation
      "react/display-name": "warn",
      "react/no-unescaped-entities": "warn",
      "react/no-unused-state": "warn",
      "react/jsx-no-useless-fragment": "warn",
      "react/jsx-curly-brace-presence": ["warn", { "props": "never", "children": "never" }],
      "react/self-closing-comp": ["warn", { "component": true, "html": true }],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      
      // TypeScript rules
      "@typescript-eslint/no-unused-vars": ["warn", { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "destructuredArrayIgnorePattern": "^_" 
      }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/no-empty-interface": "warn",
      "@typescript-eslint/consistent-type-imports": ["warn", { "prefer": "type-imports" }],
      "@typescript-eslint/consistent-type-exports": "warn",
      "@typescript-eslint/no-inferrable-types": "warn",
      
      // Next.js rules
      "@next/next/no-html-link-for-pages": "warn",
      "@next/next/no-img-element": "warn",
      
      // Import rules
      "import/order": ["warn", {
        "groups": ["builtin", "external", "internal", ["parent", "sibling"], "index", "object", "type"],
        "pathGroups": [
          { "pattern": "react", "group": "builtin", "position": "before" },
          { "pattern": "next/**", "group": "builtin", "position": "before" },
          { "pattern": "@/**", "group": "internal", "position": "after" }
        ],
        "pathGroupsExcludedImportTypes": ["react", "next"],
        "newlines-between": "always",
        "alphabetize": { "order": "asc", "caseInsensitive": true }
      }],
      "import/no-duplicates": "warn",
      "import/no-unresolved": "error",
      
      // a11y rules
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/aria-role": "warn",
      
      // General
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "prefer-const": "warn",
      "eqeqeq": ["warn", "always", { "null": "ignore" }],
      "no-unused-expressions": "warn",
      "no-duplicate-imports": "off", // Using import/no-duplicates instead
      "comma-dangle": ["warn", "always-multiline"],
      "object-curly-spacing": ["warn", "always"],
      "array-bracket-spacing": ["warn", "never"],
      "arrow-parens": ["warn", "always"],
      "quotes": ["warn", "single", { "avoidEscape": true }],
      "semi": ["warn", "always"],
      "spaced-comment": ["warn", "always"],
      "max-lines": ["warn", { "max": 400, "skipBlankLines": true, "skipComments": true }],
    }
  },
  
  // Specific overrides for different file types
  {
    files: ["**/*.tsx", "**/*.ts"],
    rules: {
      "max-lines": ["warn", { "max": 300, "skipBlankLines": true, "skipComments": true }],
    }
  },
  
  // Component files
  {
    files: ["app/**/*.tsx", "components/**/*.tsx"],
    rules: {
      // Component-specific rules
      "react/function-component-definition": ["warn", {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }],
      "react/jsx-sort-props": ["warn", {
        "callbacksLast": true,
        "shorthandFirst": true,
        "ignoreCase": true,
        "reservedFirst": true
      }],
      "react/jsx-max-props-per-line": ["warn", { "maximum": 4 }],
      "react/jsx-filename-extension": ["warn", { "extensions": [".tsx"] }]
    }
  },
  
  // Library and utils files
  {
    files: ["lib/**/*.ts", "hooks/**/*.ts", "hooks/**/*.tsx"],
    rules: {
      // Stricter rules for utility functions
      "@typescript-eslint/explicit-module-boundary-types": "warn",
      "@typescript-eslint/explicit-function-return-type": "warn",
      "jsdoc/require-jsdoc": ["warn", {
        "publicOnly": true,
        "require": {
          "FunctionDeclaration": true,
          "ArrowFunctionExpression": true
        }
      }]
    }
  },
  
  // Test files
  {
    files: ["**/*.test.ts", "**/*.test.tsx", "**/__tests__/**/*"],
    rules: {
      // Relaxed rules for tests
      "@typescript-eslint/no-explicit-any": "off",
      "max-lines": "off",
      "react/display-name": "off"
    }
  }
];

export default eslintConfig;
