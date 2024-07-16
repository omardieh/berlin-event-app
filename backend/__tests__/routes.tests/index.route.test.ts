import request from 'supertest';
import app from '@/app';

describe("GET '/'", () => {
  test('should render the index page with h1 Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toContain('<h1> Hello World </h1>');
  });
});
