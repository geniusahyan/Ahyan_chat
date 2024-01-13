import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 1000, // You can adjust the interval as needed
      binaryInterval: 3000, // You can adjust the binary interval as needed
    },
  },
});
