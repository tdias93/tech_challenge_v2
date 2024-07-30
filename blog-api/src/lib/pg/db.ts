import { Pool, PoolClient } from 'pg'
import { env } from '@/env'

const CONFIG = {
    user: env.DATABASE_USER,
    host: env.DATABASE_HOST,
    database: env.DATABASE_NAME,
    password: env.DATABASE_PASSWORD,
    port: env.DATABASE_PORT,
}

class Database {
    private pool: Pool
    private client: PoolClient | undefined

    constructor() {
        this.pool = new Pool(CONFIG)
        this.connection()
    }

    private async connection() {
        try {
            console.log('CREATING DATABASE CONNECTION')
            this.client = await this.pool.connect()
            console.log('DATABASE CONNECTION')

        } catch (error) {
            console.error(`Erros connecting to database: ${error}`)
            throw new Error(`Erros connecting to database: ${error}`)
        }
    }

    get ClientInstance() {
        return this.client
    }

}

export const database = new Database()
