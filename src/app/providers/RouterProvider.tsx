import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
        <h1 className="text-3xl font-bold underline">
          Hello world?
        </h1>
      </div>
    ),
  },
]);

export const BrowserRouter = () => {
  return <RouterProvider router={router} />;
};
