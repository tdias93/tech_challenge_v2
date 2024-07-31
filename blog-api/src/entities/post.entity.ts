export class Post {
    id?: number
    description: string
    post_text: string
    author: string
    user_id?: number
  
    constructor(description: string, post_text: string, author: string) {
      this.description = description
      this.post_text = post_text
      this.author = author
    }
  }