import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zhangomicsdatalab.github.io',
  // Emit team.html, team/Hector.html, ... so existing links keep working.
  build: { format: 'file' },
  trailingSlash: 'never',
});
