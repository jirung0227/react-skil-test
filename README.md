### 초기세팅

#### Vite 프로젝트 생성

```
npm create vite@latest react-skill-test --template react-swc-ts
cd react-skill-test
npm install
npm run dev
```

#### 디렉토리 구조를 FSD로 세팅 ( 작업하면서 수정 중 - 아래는 임시 구조 )

```
src/
├── app/
│   └── index.tsx
├── entities/
│   └── user/
├── features/
│   └── auth/
├── shared/
│   ├── api/
│   ├── components/
│   └── lib/
├── pages/
│   ├── home/
│   ├── about/
│   └── index.tsx
```

#### ESLint

ESLint는 JavaScript 및 TypeScript 코드에서 문법 오류와 스타일 문제를 찾아주는 정적 코드 분석 도구입니다.

**패키지 설명**

- **@typescript-eslint/parser** : ESLint와 Prettier의 충돌을 방지하기 위해 사용됩니다. 이 패키지는 ESLint의 포매팅 관련 규칙을 모두 비활성하여 Prettier가 코드 스타일을 전적으로 관리할 수 있게 합니다.
- **@typescript-eslint/eslint-plugin** :
  Prettier를 ESLint규칙으로 통합합니다. ESLint가 Prettier의 포매팅 규칙을 검사하도록 하여, 코드 포매팅과 스타일을 일관되게 유지할 수 있습니다.
- **eslint-plugin-react** : React-specific linting rules를 제공하는 ESLint 플러그인입니다. 이 플러그인을 통해 React 코드의 코드 품질을 유지할 수 있습니다.

##### 설치

```
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react --save-dev
```

#### Prettier

코드 포매터로, 일관된 코드 스타일을 유지하기 위해 사용됩니다.

**패키지 설명**

- **eslint-config-prettier** : ESLint와 Prettier의 충돌을 방지하기 위해 사용됩니다. 이 패키지는 ESLint의 포매팅 관련 규칙을 모두 비활성하여 Prettier가 코드 스타일을 전적으로 관리할 수 있게 합니다.
- **eslint-plugin-prettier**
  Prettier를 ESLint규칙으로 통합합니다. ESLint가 Prettier의 포매팅 규칙을 검사하도록 하여, 코드 포매팅과 스타일을 일관되게 유지할 수 있습니다.

**설치**

```
npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

#### TanstackQuery + Recoil 추가

```bash
npm install @tanstack/react-query recoil
```

```bash
npm install --save-dev @types/react-query @types/recoil
```
