import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../features/home/page/Home";
import Work from "../features/work/page/Work";
import Contact from '../features/contact/page/Contact'
import ConfirmationForm from "../features/contact/components/schedule/confirmation/ConfirmationForm";
import ConfirmationPage from "../features/contact/components/schedule/confirmation/ConfirmationPage";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/work", element: <Work /> },
  { path: "/confirmation", element: <ConfirmationForm /> },
  { path: "/success", element: <ConfirmationPage /> },
]);

export default router;
