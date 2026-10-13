import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'multi-systems': resolve(__dirname, 'projects/multi-systems.html'),
        'lawyer-ai': resolve(__dirname, 'projects/lawyer-ai.html'),
        'al-hanaa': resolve(__dirname, 'projects/al-hanaa.html'),
        'clinic-ai': resolve(__dirname, 'projects/clinic-ai.html'),
        'reviva': resolve(__dirname, 'projects/reviva.html'),
      },
    },
  },
});
