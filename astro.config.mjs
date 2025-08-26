// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        name: "n27",
        cssVariable: "--font-n27",
        provider: "local",
        variants: [
          {
            weight: "700",
            style: "normal",
            src: [
              "./src/assets/fonts/n27/n27-bold.woff2",
              "./src/assets/fonts/n27/n27-bold.woff",
            ],
            display: "swap",
          },
          {
            weight: "400",
            style: "normal",
            src: [
              "./src/assets/fonts/n27/n27-regular.woff2",
              "./src/assets/fonts/n27/n27-regular.woff",
            ],
            display: "swap",
          },
          {
            weight: "300",
            style: "normal",
            src: [
              "./src/assets/fonts/n27/n27-light.woff2",
              "./src/assets/fonts/n27/n27-light.woff",
            ],
            display: "swap",
          },
          {
            weight: "200",
            style: "normal",
            src: [
              "./src/assets/fonts/n27/n27-extralight.woff2",
              "./src/assets/fonts/n27/n27-extralight.woff",
            ],
            display: "swap",
          },
          {
            weight: "500",
            style: "normal",
            src: [
              "./src/assets/fonts/n27/n27-medium.woff2",
              "./src/assets/fonts/n27/n27-medium.woff",
            ],
            display: "swap",
          },
        ]
      }
    ]
  },
  site: "https://yupanqui.dev"
});
