import {defineConfig} from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://gaviafrica.com',
  // Default output mode is 'static' — every page is prebuilt as HTML at build time.
  // Sanity data is fetched during build; a rebuild pulls in new content.
  output: 'static',
})
