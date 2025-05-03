import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../Components/ErrorPage/ErrorPage";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    // children: [
    //     {
    //         path: '/',
    //         element: <Home></Home>,
    //     },

    // ]
  },
]);
