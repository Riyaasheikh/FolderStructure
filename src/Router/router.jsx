import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../features/home/page/Home";
import ErrorPage from "../features/error/page/Error";
import PrivacyPolicy from '../features/privacypolicy/page/PrivacyPolicy'
import RemoteCollaboration from '../features/remotecollab/page/RemoteCollaboration'
import ProductFeature from "../features/feature/page/ProductFeature";
export const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  {path:'/remote',element:<RemoteCollaboration/>,errorElement:<ErrorPage/>},
  {path:'/product',element:<ProductFeature/>,errorElement:<ErrorPage/>},
  {path:'/privacy',element:<PrivacyPolicy/>,errorElement:<ErrorPage/>},
]);

export default router;
