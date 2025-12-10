import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      optimizeDeps: {
        // Pre-bundle Firebase and other heavy dependencies
        include: ['react', 'react-dom', 'firebase/auth', 'firebase/firestore', 'lucide-react'],
      },
      build: {
        // Code splitting for better caching
        rollupOptions: {
          output: {
            manualChunks: {
              // Vendor chunks
              'react-vendor': ['react', 'react-dom'],
              'ui-vendor': ['lucide-react'],
              // Feature chunks
              'builder': ['./components/BuilderView.tsx'],
              'gods': ['./components/GodsView.tsx'],
              'items': ['./components/ItemsView.tsx'],
              'tournament': ['./components/TournamentView.tsx'],
              'guides': ['./components/GuidesView.tsx'],
            },
          },
        },
        // Optimize build output
        minify: 'esbuild',
        // Report file sizes
        reportCompressedSize: true,
        chunkSizeWarningLimit: 500, // 500 KB warning threshold
      },
    };
});
