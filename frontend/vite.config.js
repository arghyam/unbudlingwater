import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/unbundlingwater/client/",
  preview: {
    port: 4000,
  },
  server: {
    port: 3000,
  },
});
