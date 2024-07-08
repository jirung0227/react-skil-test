### 초기세팅

### Vite 프로젝트 생성

```
npm create vite@latest react-skill-test --template react-swc-ts
cd react-skill-test
npm install
npm run dev
```

### 디렉토리 구조를 FSD로 세팅 ( 작업하면서 수정 중 - 아래는 임시 구조 )

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

### TanstackQuery + Recoil 추가

```bash
npm install @tanstack/react-query recoil
```

```bash
npm install --save-dev @types/react-query @types/recoil
```
