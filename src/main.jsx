import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import GlobalStyle from "./styles/globalStyles.js";

const root = document.getElementById("root");
createRoot(root).render(
  <>
    <GlobalStyle />
    <App />
  </>
);
