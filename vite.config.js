import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/ratp/", // ← ici !
  server: {
    open: true,
  },
});
