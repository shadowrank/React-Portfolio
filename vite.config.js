// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Bind to all available interfaces
    port: 5173,       // Specify the port, default is 5173
  },
});
