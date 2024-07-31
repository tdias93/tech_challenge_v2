import { FastifyInstance } from 'fastify'
import { create } from './create'
import { findPost } from './find'
import { findPostAll } from './find-all'
import { updatePost } from './update'
import { deletPost } from './delet'

export async function postRoutes(app: FastifyInstance) {
    app.get('/post/', findPostAll)
    app.get('/post/:id', findPost)
    app.put('/post/:id', updatePost)
    app.delete('/post/:id', deletPost)
    app.post('/new_post', create)
}