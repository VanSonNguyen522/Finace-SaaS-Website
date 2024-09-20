import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import accounts  from './accounts';
// import { zValidator } from '@hono/zod-validator';
// import { z } from 'zod';
// import { clerkMiddleware, getAuth } from '@hono/clerk-auth';
// import { error } from 'console';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

const routes = app
  .route("/accounts", accounts )


export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes