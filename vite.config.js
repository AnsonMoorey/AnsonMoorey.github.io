import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',   // << make sure this matches your repo name with slashes
  plugins: [react()],
});
