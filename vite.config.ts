import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages 项目站点部署在子路径下
  base: '/anthropic-spa/',
  plugins: [react()],
  server: {
    port: 5173,
  },
});
