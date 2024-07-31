import { Post } from '@/entities/post.entity'
import { PostRepository } from '@/repositories/post.repository'

export class UpdatePostUseCase {
  constructor(private postRepository: PostRepository) {}

  handler(post: Post) {
    return this.postRepository.updatePost(post)
  }
}