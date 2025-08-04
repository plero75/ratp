import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ratp/', // très important ! mettre le nom du repo ici
  plugins: [react()],
});