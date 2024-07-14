import { Outlet } from 'react-router-dom';

export const GenericLayout = () => {
  return (
    <>
      <header>제목</header>
      {/* 부모 경로 요소에서 자식 경로 요소를 렌더링합니다. */}
      <Outlet />
      <footer>푸터</footer>
    </>
  );
};
