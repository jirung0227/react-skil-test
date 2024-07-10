### 초기세팅

#### Vite 프로젝트 생성

```
npm create vite@latest react-skill-test --template react-swc-ts
cd react-skill-test
npm install
npm run dev
```

#### FSD 디렉토리 구조 적용 ( 임시 구조 )

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

**설치**

```
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react --save-dev
```

#### Prettier

코드 포매터로, 일관된 코드 스타일을 유지하기 위해 사용됩니다.

**패키지 설명**

- **eslint-config-prettier** : ESLint와 Prettier의 충돌을 방지하기 위해 사용됩니다. 이 패키지는 ESLint의 포매팅 관련 규칙을 모두 비활성하여 Prettier가 코드 스타일을 전적으로 관리할 수 있게 합니다.
- **eslint-plugin-prettier** :
  Prettier를 ESLint규칙으로 통합합니다. ESLint가 Prettier의 포매팅 규칙을 검사하도록 하여, 코드 포매팅과 스타일을 일관되게 유지할 수 있습니다.
- **eslint-plugin-prettier** : Prettier 플러그인으로, import 문을 자동으로 정렬하고 정리해줍니다. import 문을 알파벳 순서로 정렬하고, 사용되지 않는 import를 제거하여 코드의 가독성과 유지보수성을 향상시킵니다.

**설치**

```
npm install prettier eslint-config-prettier eslint-plugin-prettier prettier-plugin-organize-imports --save-dev
```

#### Tailwindcss(PostCSS 및 Autoprefixer 포함)

유틸리티 클래스 기반의 CSS 프레임워크로, 빠르고 쉽게 스타일을 적용하고 맞춤화할 수 있도록 설계된 도구입니다.

**패키지 설명**

- **postcss** : tailwindCSS와 마찬가지로 PostCSS의 플러그인 형태로 동작하므로 autoprefixer기능을 사용하려면 PostCSS도 함께 설치해야 합니다.
- **autoprefixer** : 사용자 CSS가 벤더 접두사를 붙이지 않더라도 후처리 과정에서 자동으로 벤더 접두사가 붙은 CSS를 생성해줍니다.
- **tailwindcss init -p**: Tailwind CSS 초기 설정 파일을 생성합니다. p옵션 설정시 PostCSS 설정 파일도 함께 생성합니다.

**설치**

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

#### TanstackQuery + Recoil 추가

```bash
npm install @tanstack/react-query recoil
```

```bash
npm install --save-dev @types/react-query @types/recoil
```
