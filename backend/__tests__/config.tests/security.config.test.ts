import { SecurityConfig } from '@/config';
import express from 'express';
import request from 'supertest';

describe('SecurityConfig', () => {
  let app: express.Application;

  beforeEach(() => {
    app = express();
    new SecurityConfig(app);
    app.get('/test', (_, res) => res.send('Hello World'));
  });

  it('should have helmet headers', async () => {
    const response = await request(app).get('/test');
    expect(response.headers['x-dns-prefetch-control']).toBe('off');
    expect(response.headers['x-frame-options']).toBe('SAMEORIGIN');
    expect(response.headers['x-download-options']).toBe('noopen');
    expect(response.headers['x-content-type-options']).toBe('nosniff');
    expect(response.headers['x-permitted-cross-domain-policies']).toBe('none');
    expect(response.headers['x-xss-protection']).toBe('0');
  });

  it('should allow CORS for the specified origin in the dev environment', async () => {
    const response = await request(app).get('/');
    expect(response.headers['access-control-allow-origin']).toBe(process.env.CLIENT_URL || '*');
  });
});
