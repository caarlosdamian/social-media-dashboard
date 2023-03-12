import React from "react";
import ReactDOM from "react-dom/client";
import App from "./common/App";
import { ThemeProvider } from "./context/Theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
