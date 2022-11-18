import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../features/ErrorPage";
import { Settings } from "../features/Settings";
import { Start } from "../features/Start";
import { App } from "./App";

export const RouterSetings = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Start />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
