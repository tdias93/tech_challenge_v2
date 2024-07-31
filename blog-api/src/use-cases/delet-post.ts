import { Post } from "@/entities/post.entity";
import { PostRepository } from "@/repositories/post.repository";

export class DeletPostUseCase {
    constructor(private postRepository: PostRepository) {}

    async handler(userId: number): Promise<(Post | undefined) > {
        return this.postRepository.deletPost(userId)
    }
}