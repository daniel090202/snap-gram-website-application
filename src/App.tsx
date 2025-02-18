import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import "./App.css";

import routeConstants from "./constants/routeConstants";

import { DefaultLayout } from "./layouts";
import { HomePage, SignInPage, NotFoundPage } from "./pages";

const publicRoutes: Array<RouteObject> = [
  { path: routeConstants.path.SIGN_IN_PAGE, element: <SignInPage /> },
  { path: routeConstants.path.NOT_FOUND_PAGE, element: <NotFoundPage /> },
];

const protectedRoutes: Array<RouteObject> = [
  {
    element: <DefaultLayout />,
    path: routeConstants.path.HOME_PAGE,
    children: [{ path: routeConstants.path.HOME_PAGE, element: <HomePage /> }],
  },
];

const router = createBrowserRouter([...publicRoutes, ...protectedRoutes]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
