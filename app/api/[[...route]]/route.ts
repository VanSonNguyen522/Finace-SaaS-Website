import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';
import { clerkMiddleware, getAuth } from '@hono/clerk-auth';
import { error } from 'console';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

app
  .get(
    '/hello',
    clerkMiddleware(),
    (c) => {
      const auth =getAuth(c);
      if(!auth?.userId){
        return c.json({ error: "Unauthorize"});
      }
      return c.json({
        message: 'Hello Next.js!',
        userId: auth.userId,
      });
  });
  

export const GET = handle(app);
export const POST = handle(app);
