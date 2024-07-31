//import { makeFindWithPersonUseCase } from '@/use-cases/factory/make-find-with-person'
import { PostRepository } from '@/repositories/post.repository'
import { FindWithPostAllUseCase } from '@/use-cases/find-with-post-all'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function findPostAll(request: FastifyRequest, reply: FastifyReply) {
  
  try {
        const postRepository = new PostRepository()
        const findWithPostUseCase = new FindWithPostAllUseCase(postRepository) 
        const post = await findWithPostUseCase.handler()

        return reply.status(200).send(post)
    
    } catch (error) {
    
        console.error(error)
        throw new Error('Find Post Error')
    }

}