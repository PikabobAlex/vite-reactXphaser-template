import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import BasicSSL from "@vitejs/plugin-basic-ssl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), BasicSSL()],
  server: { port: 3000, host: "0.0.0.0" },
});
