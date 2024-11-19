import { defineConfig } from "vite";

export default defineConfig({
  root: "./src", // Update this path to your actual base directory
  build: {
    outDir: "../dist", // Ensure this path exists and is correct
  },
});
