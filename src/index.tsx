import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import store from "./core/store";
import { App } from "./core/App";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./core/GlobalStyle";
import reportWebVitals from "./reportWebVitals";
import { Start } from "./features/Start";
import { ErrorPage } from "./features/ErrorPage";
import { Settings } from "./features/Settings";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/dashboard/" element={<App />}>
      <Route index element={<Start />} />
      <Route path="settings" element={<Settings />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Normalize />
      <GlobalStyle />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
