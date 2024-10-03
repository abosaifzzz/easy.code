import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure this is set to 'dist' or change to 'build' if needed
    chunkSizeWarningLimit: 1000, // Increase the chunk size warning limit to 1000 kB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) {
              return "react-vendor"; // Create a separate chunk for React-related libraries
            }
            return "vendor"; // Put all other node_modules dependencies into a separate chunk
          }
        },
      },
    },
  },
});
