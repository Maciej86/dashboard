import { createHashRouter } from "react-router-dom";
import { ErrorPage } from "../features/ErrorPage";
import { Notes } from "../features/Notes";
import { Settings } from "../features/Settings";
import { Start } from "../features/Start";
import { App } from "./App";

export const RouterSetings = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Start />,
      },
      {
        path: "notes",
        element: <Notes />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);
