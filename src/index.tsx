import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeCustomization from "./themes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeCustomization>
      <App />
    </ThemeCustomization>
  </React.StrictMode>
);

reportWebVitals();
