//import { makeFindWithPersonUseCase } from '@/use-cases/factory/make-find-with-person'
import { PostRepository } from '@/repositories/post.repository'
import { DeletPostUseCase } from '@/use-cases/delet-post'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function deletPost(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.number(),
  })

  const { id } = registerParamsSchema.parse(request.params)

  try {
        const postRepository = new PostRepository()
        const deletPostUseCase = new DeletPostUseCase(postRepository) 
        const post = await deletPostUseCase.handler(id)

        return reply.status(200).send(post)
    
    } catch (error) {
    
        console.error(error)
        throw new Error('Fin Post Error')
    }

}