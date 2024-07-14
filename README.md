### 초기세팅

#### Vite 프로젝트 생성

```
npm create vite@latest react-skill-test --template react-swc-ts
cd react-skill-test
npm install
npm run dev
```

#### FSD 디렉토리 구조 적용

**규칙**

- 레이어간 위계질서(추상화, 다형성, 상속)

- index.js에서 export한 것만 import한다. (캡슐화)

**구조**

```
// 1단계
Layers/
├── app/
│   └── 전역 설정/Provider, Router, Client같은 HOC가 slice가 됨/ slice 없음
├── pages/
│   ├── 주소별 페이지/각각의 주소별 페이지가 slice
├── widgets/
│   ├── feature의 묶음 / 어떻게 묶을지는 재사용 여부에 따라
├── feature의/
│   ├── 행동 / 동사가 slice, api segment에서는 해당 행동을 요청함
├── entities/
│   ├── 데이터 / 데이터가 slice, api segment에서는 해당 행동을 요청함
├── shared/
└──  └── 공유 컴포넌트 / slice 없음
// 2단계
Slices/
├── user/
├── post/
└── comment/
// 3단계
Segments/
├── ui/
├── model/
└── api/
```

- **공통 에러 코드** : shared/constants/errorCodes.ts
- **도메인 모델 관련 에러 코드** : entities/{entity}/constants/errorCodes.ts
- **특정 기능 관련 에러 코드** : features/{feature}/constants/errorCodes.ts

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

### Husky + lint-staged 설정

Husky와 lint-staged를 조합하여 git commit 전에 linting에 실패할 경우 commit 되지 않도록 처리한다.

#### Husky

Husky는 Git 훅을 쉽게 관리하고 실행할 수 있게 해주는 도구입니다. Git 훅은 특정 Git 이벤트가 발생할 때 자동으로 실행되는 스크립트입니다. 예를 들어, 커밋하기 전에 코드 린터를 실행하거나, 푸시하기 전에 테스트를 실행하는 등의 작업을 수행할 수 있습니다.

##### 주요 특징

- 간편한 설정: Git 훅을 쉽게 설정하고 관리할 수 있습니다.
- 다양한 훅 지원: pre-commit, pre-push, commit-msg 등 다양한 Git 훅을 지원합니다.
- 자동 실행: 특정 이벤트가 발생할 때 자동으로 스크립트를 실행합니다.

#### lint-staged

lint-staged는 Git의 스테이징 영역에 있는 파일에 대해서만 린팅(Linting)이나 포맷팅을 수행하는 도구입니다. 이를 통해 커밋 시점에서 코드 품질을 유지하면서 전체 프로젝트에 대해 린터를 실행하지 않아도 됩니다.

##### 주요 특징

- 빠른 성능: 변경된 파일에 대해서만 린터를 실행하므로 빠른 성능을 제공합니다.
- 다양한 작업 지원: 린팅 외에도 포맷팅, 테스트 실행 등 다양한 작업을 수행할 수 있습니다.
- 간편한 설정: 간단한 설정으로 다양한 파일 형식에 대해 작업을 설정할 수 있습니다.

**패키지 설명**

- **mrm lint-staged** :Husky와 lint-staged 패키지를 추가하고, 필요한 환경 파일을 추가 생성합니다.

**설치**

```
npx mrm lint-staged
```

**package.json 설정**

- **prettier --write**: Prettier를 실행하여 대상 파일의 코드 스타일을 자동으로 포맷팅합니다. --write 옵션은 파일을 덮어써서 포맷팅 결과를 저장합니다.
- **eslint --fix**: ESLint를 실행하여 대상 파일의 코드 품질을 검사하고, 자동으로 수정할 수 있는 문제를 해결합니다. --fix 옵션은 자동으로 수정 가능한 규칙 위반을 수정합니다.

```
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "prettier --write",
      "eslint --fix"
    ]
  }
}

```

### Storybook

UI 컴포넌트의 독립적 개발, 테스트, 문서화를 지원하는 강력한 도구입니다. 이를 통해 개발 생산성을 높이고, 컴포넌트 라이브러리의 품질을 유지할 수 있습니다. Storybook을 사용하면 팀 전체가 일관된 방식으로 컴포넌트를 사용하고, 컴포넌트의 다양한 상태를 손쉽게 관리할 수 있습니다.

**설치**

```
npx storybook@latest init
```

### 사용자 설정

**JavaScript › Preferences: Import Module Specifier**
자동 가져오기의 기본 경로 스타일입니다.
절대 경로만 사용하기위해 설정

```
"javascript.preferences.importModuleSpecifier": "non-relative"
```

**TypeScript › Preferences: Import Module Specifier Ending**
자동 가져오기를 위한 기본 경로 끝자리.
import시 확장자를 필수로 붙이기 위해 설정

```
"typescript.preferences.importModuleSpecifierEnding": "js"
```
