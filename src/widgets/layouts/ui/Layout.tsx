import { FiActivity } from 'react-icons/fi';
import { LuMenu } from 'react-icons/lu';
import { Outlet } from 'react-router-dom';

export const GenericLayout = () => {
  const isLogin = true;

  return (
    <>
      {isLogin ? <UserNavigation /> : <GuestNavigation />}
      {/* 부모 경로 요소에서 자식 경로 요소를 렌더링합니다. */}
      <Outlet />
      <footer className="w-full bg-slate-300 absolute bottom-0">
        <div className="max-w-[1200px] mx-auto ">푸터</div>
      </footer>
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
    <header className="h-14 ">
      <div className="flex justify-between items-center max-xl:px-0 max-w-[1200px] h-full m-auto">
        <div className="flex items-center">
          <FiActivity size="18" className="mr-1" /> Guest
        </div>
        <div>
          <LuMenu size="20" />
        </div>
      </div>
    </header>
  );
};

/**
 * @description 사용자 네비게이션 (임시)
 */
const UserNavigation = () => {
  return (
    <header className="h-14 ">
      <div className="flex justify-between items-center max-xl:px-0 max-w-[1200px] h-full m-auto">
        <div className="flex items-center">
          <FiActivity size="18" className="mr-1" /> User
        </div>
        <div>
          <LuMenu size="20" />
        </div>
      </div>
    </header>
  );
};
