module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier",
    "react-hooks",
    "simple-import-sort",
    "sort-exports"
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/explicit-function-return-type": ["off"],
    "@typescript-eslint/no-inferrable-types": 1,
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
    ],
    "sort-exports/sort-exports": ["error", { sortDir: "asc" }],
    "simple-import-sort/sort": [
      "error",
      {
        groups: [
          ["^\\u0000"],
          ["^@?\\w"],
          ["^[^.|components]"],
          ["^\\.|components"]
        ]
      }
    ]
  },
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off"
      }
    }
  ]
};
