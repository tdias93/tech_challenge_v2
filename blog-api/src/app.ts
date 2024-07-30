import fastify from 'fastify'
import { personRoutes } from '@/http/controllers/person/routes'
import { userRoutes } from './http/controllers/user/routs';

export const app = fastify();

app.register(personRoutes)
app.register(userRoutes)