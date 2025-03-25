import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { URL } from "./src/router/constants";

// https://vite.dev/config/
export default defineConfig({
  base: URL,
  plugins: [react()],
});
