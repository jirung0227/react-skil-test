module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    // ESLint에서 기본 제공하는 규칙(rule)외에 추가할 규칙
    "react-refresh",
  ],
  rules: {
    // 규칙을 하나하나 세세하게 제어하기 위해 사용 (보통 extends 옵션에 의해 설정된 규칙을 덮어쓰고 싶을 때 사용)

    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
