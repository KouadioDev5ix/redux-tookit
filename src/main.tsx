import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./apps/store.ts";
// import TodoApplication from "./views/TodoApplication.tsx";
import StudentProjet from "./views/StudentProjet.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <StudentProjet />
    </Provider>
  </StrictMode>,
);
