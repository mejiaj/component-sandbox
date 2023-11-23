import { defineConfig } from "vite";
import twig from "vite-plugin-twig-drupal";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [
          // "@uswds/uswds/packages",
          "./node_modules/@uswds/uswds/packages",
        ],
      },
    },
  },
  plugins: [
    // Other vite plugins.
    twig(),
    // Other vite plugins.
  ],
  framework: "react",
});
