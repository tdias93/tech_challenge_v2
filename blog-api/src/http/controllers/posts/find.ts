//import { makeFindWithPersonUseCase } from '@/use-cases/factory/make-find-with-person'
import { PostRepository } from '@/repositories/post.repository'
import { FindWithPostUseCase } from '@/use-cases/find-with-post'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findPost(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.number(),
  })

  const { id } = registerParamsSchema.parse(request.params)

  try {
        const postRepository = new PostRepository()
        const findWithPostUseCase = new FindWithPostUseCase(postRepository) 
        const post = await findWithPostUseCase.handler(id)

        return reply.status(200).send(post)
    
    } catch (error) {
    
        console.error(error)
        throw new Error('Fin Post Error')
    }

}