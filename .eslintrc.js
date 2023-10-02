module.exports = {
  root: true,
  extends: ["@react-native", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "jest"],
  env: {
    "jest/globals": true, // <-- Add this
  },
  rules: {
    "@typescript-eslint/no-shadow": ["error"],
    "no-shadow": "off",
    "no-undef": "off",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    quotes: [1, "double", {avoidEscape: true}],
    semi: 0,
    "object-curly-spacing": "off",
    "max-lines": [
      "error",
      {
        max: 400,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    "prettier/prettier": [
      "error",
      {
        printWidth: 200,
        singleQuote: false,
        arrowParens: "avoid",
      },
    ],
    "react-hooks/exhaustive-deps": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
    },
  ],
}
