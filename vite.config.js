import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative paths support root domains and GitHub Pages repository URLs.
  base: './',
});
