import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // @formspree/react is CommonJS; dedupe ensures it shares the app's single
  // React instance (otherwise: "Invalid hook call").
  resolve: { dedupe: ["react", "react-dom"] },
});
