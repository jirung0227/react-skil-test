/**
 * @description
 * root: 현재 폴더의 린트 설정 파일만 적용하도록 지정합니다.
 * env: ESLint가 인식할 수 있는 전역 변수를 정의합니다.
 * plugins : ESLint에서 기본 제공하는 규칙(rule)외에 추가할 규칙
 * ignorePatterns : 린트를 무시할 파일/폴더를 지정합니다.
 * parser: TypeScript 코드를 파싱하기 위한 파서를 지정합니다.
 * extends: 다른 사람들이 만든 ESLint 설정을 가져와서 사용합니다.
 * rules : 프로젝트에 맞게 규칙을 세부적으로 설정합니다. (보통 extends 옵션에 의해 설정된 규칙을 덮어쓰고 싶을 때 사용)
 **/
module.exports = {
  root: true,
  env: {
    browser: true, // 브라우저 환경에서 전역 변수 설정
    node: true, // Node.js 환경에서 전역 변수 설정
    es6: true, // ECMAScript 6 환경 설정,
  },
  plugins: [
    'import', // import 관련 규칙 (eslint-plugin-import 패키지 설치 필요)
    '@typescript-eslint', // TypeScript 린트
    'react', // React 린트
    'react-refresh', // React Refresh 린트
    'prettier', // Prettier 린트
  ],
  extends: [
    'eslint:recommended', // ESLint에서 추천하는 기본 설정
    'plugin:@typescript-eslint/recommended', //TypeScript 관련 추천 설정
    'plugin:react/recommended', //React 관련 추천 설정
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
