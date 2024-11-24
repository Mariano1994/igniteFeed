import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { PostContextProvidar } from "./context/PostsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PostContextProvidar>
      <App />
    </PostContextProvidar>
  </StrictMode>
);
