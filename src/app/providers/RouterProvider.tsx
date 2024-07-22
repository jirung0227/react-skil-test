import { HomePage } from '@/pages/home/index.tsx';
import { LoginPage } from '@/pages/login/index.tsx';
import { TailwindCssTestPage } from '@/pages/tailwind-css-test/index.tsx';
import { GenericLayout, GuestLayout } from '@/widgets/layouts/index.tsx';

import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from 'react-router-dom';

interface RouteError {
  status?: string;
  statusText?: string;
  message?: string;
  data?: string;
}

const ErrorPage = () => {
  /**
   * @description useRouteError훅은 현재 라우트의 에러를 반환합니다.
   */
  const error = useRouteError() as RouteError;
  console.error(error);
  /**
   * @todo 400과 500에러 구분해서 다른 메시지 띄워주기
   */
  return (
    <div>
      <h1 className="text-3xl font-bold">{error.status}</h1>
      <p>{error.statusText || error.message}</p>
      <p>{error.data}</p>
    </div>
  );
};

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        element: <GenericLayout />,
        children: [
          /**
           * @todo 추후 route 파일 분리 고려
           */
          {
            index: true,
            element: <HomePage />,
          },
        ],
      },
      {
        element: <GuestLayout />,
        children: [
          {
            path: 'tailwind-css-test',
            element: <TailwindCssTestPage />,
          },
        ],
      },
      {
        /**
         * @todo loader를 사용하여 사용자 로그인 여부 확인
         */
        /**
         * @description loader : 컴포넌트가 렌더링 되기 전 컴포넌트에 데이터를 전달하는 역할을 합니다.
         * useLoaderData()훅을 통해 데이터를 가져올 수 있습니다.
         */
        // loader: async () => {}
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
]);

export const BrowserRouter = () => {
  return <RouterProvider router={router} />;
};
