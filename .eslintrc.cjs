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
    '@typescript-eslint', // TypeScript 린트
    'react', // React 린트
    'react-refresh', // React Refresh 린트
    'prettier', // Prettier 린트
    'import', // import 관련 규칙 (eslint-plugin-import 패키지 설치 필요)
  ],
  extends: [
    'eslint:recommended', // ESLint에서 추천하는 기본 설정
    'plugin:@typescript-eslint/recommended', //TypeScript 관련 추천 설정
    'plugin:react/recommended', //React 관련 추천 설정
    'plugin:storybook/recommended', //Storybook 관련 추천 설정
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off', //Import React from 'react' 를 사용하지 않아도 되도록 설정
    'import/extensions': ['error', 'ignorePackages'], // 라이브러리 패키지는 제외하고 import문에 확장자 없을 시 에러. (TypeScript 5버전부터 확장자 명시를 권장)
    'no-restricted-imports': [
      'error',
      {
        patterns: ['.*'], // 상대 경로로 import할 수 없도록 설정
      },
    ],
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            target: './src/shared',
            from: [
              './src/entities',
              './src/features',
              './src/widgets',
              './src/pages',
              './src/processes',
              './src/app',
            ],
          },
          {
            target: './src/entities',
            from: [
              './src/features',
              './src/widgets',
              './src/pages',
              './src/processes',
              './src/app',
            ],
          },
          {
            target: './src/features',
            from: [
              './src/widgets',
              './src/pages',
              './src/processes',
              './src/app',
            ],
          },
          {
            target: './src/widgets',
            from: ['./src/pages', './src/processes', './src/app'],
          },
          {
            target: './src/pages',
            from: ['./src/processes', './src/app'],
          },
          {
            target: './src/processes',
            from: ['./src/app'],
          },
        ],
      },
    ],
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect', // 'detect'로 설정하면 ESLint가 설치된 React 버전을 자동으로 감지합니다.
    },
    'import/resolver': {
      //eslint-plugin-import 플러그인에서 사용하는 설정
      // ESLint가 모듈과 경로를 올바르게 해석할 수 있도록 하는 구성
      // TypeScript 파일의 모듈을 올바르게 해석하기 위한 설정
      typescript: {
        alwaysTryTypes: true, // true로 설정하면, TypeScript 타입 정의 파일(.d.ts)도 모듈 해석 시 시도하게 됩니다.
        project: './tsconfig.app.json', //TypeScript 설정 파일의 경로를 지정합니다.
      },
    },
  },
};
