import fastify from 'fastify';
import cookie from '@fastify/cookie';
import fastifyCors from '@fastify/cors'; 
import { usersRoutes } from './routes/users';
import { mealsRoutes } from './routes/meals';

export const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(cookie);
app.register(usersRoutes, {
  prefix: 'users',
});
app.register(mealsRoutes, {
  prefix: 'meals',
});

