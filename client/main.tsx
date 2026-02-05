import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

// Only create root if it doesn't already exist
if (!rootElement._reactRoot) {
  const root = ReactDOM.createRoot(rootElement);
  (rootElement as any)._reactRoot = root;
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  const root = (rootElement as any)._reactRoot;
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
