import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";

import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router/Router.tsx";

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/generalStore.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={AppRouter} />
      </PersistGate>
    </Provider>
  </StrictMode>,
);
