import { Post } from "@/entities/post.entity";
import { database } from "@/lib/pg/db";

export class PostRepository {

    public async create({ description, post_text, author, user_id }: Post): Promise<Post | undefined> {
        const result = await database.ClientInstance?.query<Post>(
            `INSERT INTO posts (description, post_text, author, user_id) VALUES ($1, $2, $3, $4) RETURNING *`,
            [description, post_text, author, user_id]
        )

        return result?.rows[0]
    }

    public async findPost(): Promise<(Post[] | undefined) > {
        const result = await database.ClientInstance?.query(
            `SELECT * FROM posts`,
        )
    
        return result?.rows
    }

    public async findWithPost(postId: number): Promise<(Post | undefined) > {
        const result = await database.ClientInstance?.query(
            `SELECT * FROM posts WHERE id = $1`,
            [postId],
        )
    
        return result?.rows[0]
    }

    public async updatePost({ description, post_text, author, user_id }: Post): Promise<Post | undefined> {
        const result = await database.ClientInstance?.query(
            `UPDATE posts SET description = $1, post_text = $2, author = $3 WHERE user_id = $4 RETURNING *`,
            [description, post_text, author, user_id]
        )

        return result?.rows[0]
    }

    public async deletPost(postId: number): Promise<(Post | undefined) > {
        console.log(postId)
        const result = await database.ClientInstance?.query(
            `DELETE FROM posts WHERE id = $1`,
            [postId],
        )

        console.log(postId)
    
        return result?.rows[0]
    }

}