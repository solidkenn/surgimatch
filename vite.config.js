import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      {
        name: 'dev-api-submit',
        configureServer(server) {
          server.middlewares.use('/api/submit', async (req, res, next) => {
            if (req.method !== 'POST') return next();
            const url = env.GOOGLE_SCRIPT_URL;
            if (!url) {
              res.statusCode = 503;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'GOOGLE_SCRIPT_URL not set in .env' }));
              return;
            }
            const chunks = [];
            req.on('data', (c) => chunks.push(c));
            req.on('end', async () => {
              try {
                const body = Buffer.concat(chunks).toString();
                await fetch(url, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body,
                });
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true }));
              } catch (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: String(err) }));
              }
            });
          });
        },
      },
    ],
  };
});
