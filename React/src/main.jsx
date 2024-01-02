import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import OnBoarding from "./components/auth/on-boarding.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/onboarding",
    element: <OnBoarding />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
