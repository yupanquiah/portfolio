// @ts-check
import vercelAdapter from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, envField } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'server',
  adapter: vercelAdapter(),
  prefetch: true,
  env: {
    schema: {
      GEOLOCATION: envField.string({ context: "client", access: "public" }),
    }
  }
})
