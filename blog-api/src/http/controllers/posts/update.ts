import { PostRepository } from "@/repositories/post.repository";
import { UpdatePostUseCase } from "@/use-cases/update-post";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function updatePost(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        description: z.string(),
        post_text: z.string(),
        author: z.string(),
        user_id: z.coerce.number(),
    })
    
    const { description, post_text, author, user_id } = registerBodySchema.parse(request.body)
    
    try {
        const postRepository = new PostRepository()
        const updatePostUseCase = new UpdatePostUseCase(postRepository)
    
        const post = await updatePostUseCase.handler({ description, post_text, author, user_id })

        return reply.status(201).send(post)

    } catch (error) {

        console.error(`Error Update post: ${error}`)

        throw new Error(`Error Update post: ${error}`)
    }
}