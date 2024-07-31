import fastify from 'fastify'
import { personRoutes } from '@/http/controllers/person/routes'
import { userRoutes } from './http/controllers/user/routs';
import { postRoutes } from './http/controllers/posts/routs';

export const app = fastify();

app.register(personRoutes)
app.register(userRoutes)
app.register(postRoutes)