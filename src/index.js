import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const USE_STRICT_MODE = true;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

if (USE_STRICT_MODE) {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  root.render(<App />);
}
