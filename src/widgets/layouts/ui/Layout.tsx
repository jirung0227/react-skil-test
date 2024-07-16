import { Outlet } from 'react-router-dom';

export const GenericLayout = () => {
  const isLogin = true;

  return (
    <>
      {isLogin ? <UserNavigation /> : <GuestNavigation />}
      {/* 부모 경로 요소에서 자식 경로 요소를 렌더링합니다. */}
      <Outlet />
      <footer>푸터</footer>
    </>
  );
};

export const GuestLayout = () => {
  return (
    <>
      <GuestNavigation />
      <Outlet />
      <footer />
    </>
  );
};

export const NakedLayout = () => {
  return <Outlet />;
};

export default GuestLayout;

/**
 * @description 게스트 네비게이션 (임시)
 */
const GuestNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/user/1">guest 1</a>
        </li>
        <li>
          <a href="/user/2">guest 2</a>
        </li>
      </ul>
    </nav>
  );
};

/**
 * @description 사용자 네비게이션 (임시)
 */
const UserNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/user/1">사용자 1</a>
        </li>
        <li>
          <a href="/user/2">사용자 2</a>
        </li>
      </ul>
    </nav>
  );
};
