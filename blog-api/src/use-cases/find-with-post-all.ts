import { Post } from "@/entities/post.entity";
import { PostRepository } from "@/repositories/post.repository";

export class FindWithPostAllUseCase {
    constructor(private postRepository: PostRepository) {}

    async handler(): Promise<(Post[] | undefined) > {
        return this.postRepository.findPost()
    }
}