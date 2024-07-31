import { PostRepository } from "@/repositories/post.repository";
import { CreatePostUseCase } from "@/use-cases/create-post";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        description: z.string(),
        post_text: z.string(),
        author: z.string(),
        user_id: z.coerce.number(),
    })
    
    const { description, post_text, author, user_id } = registerBodySchema.parse(request.body)
    
    try {
        const postRepository = new PostRepository()
        const createPostUseCase = new CreatePostUseCase(postRepository)
    
        const post = await createPostUseCase.handler({ description, post_text, author, user_id })

        return reply.status(201).send(post)

    } catch (error) {

        console.error(`Error creating post: ${error}`)

        throw new Error(`Error creating post: ${error}`)
    }
}