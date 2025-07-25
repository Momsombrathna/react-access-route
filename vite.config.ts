import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.ts"), // ✅ Your library entry point
      name: "ReactAccessRoute",
      fileName: (format) => `react-access-route.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // ✅ Don't bundle peer deps
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
