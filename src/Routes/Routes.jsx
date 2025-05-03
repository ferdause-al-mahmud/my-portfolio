import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../components/ErrorPage/ErrorPage";
import MainLayout from "../mainLayout"; // Use MainLayout for layout
import App from "../App";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Main layout for shared components (NavBar, Footer)
    errorElement: <ErrorPage />, // Show ErrorPage for invalid routes
    children: [
      {
        path: "/",
        element: <App />, // Home page
      },
      {
        path: "project/:id", // Dynamic route for project details
        element: <ProjectDetails />,
      },
    ],
  },
]);
