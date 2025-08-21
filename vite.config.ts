// vite.config.ts
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { reactRouter } from '@react-router/dev/vite';
import svgr from 'vite-plugin-svgr';
// import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths(), svgr()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
  },
});
