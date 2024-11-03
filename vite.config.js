import { defineConfig } from "vite";
import purgecss from "vite-plugin-purgecss";
import cssnanoPlugin from "cssnano";

export default defineConfig({
  base: "/portafolio-web/",
  plugins: [
    purgecss({
      content: ["./**/*.{html,js}"],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        cssnanoPlugin({
          preset: "default",
        }),
      ],
    },
    preprocessorOptions: {
      less: {},
    },
  },
});
