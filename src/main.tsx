import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import Toast from "./common/UI/Toast/Toast.tsx";


createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <Toast />
      <App />
    </StrictMode>
  </Provider>
);