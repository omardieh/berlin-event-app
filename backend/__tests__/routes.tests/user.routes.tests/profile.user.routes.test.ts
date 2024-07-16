import request from 'supertest';
import app from '@/app';

describe("GET '/'", () => {
  test('should render the index page with h1 Hello World', async () => {
    const res = await request(app).get('/user');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'User Main Route' });
  });
});
