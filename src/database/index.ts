import { Database } from "./types"
import { createPool } from "mysql2"
import { Kysely, MysqlDialect } from "kysely"

const dialect = new MysqlDialect({
  pool: createPool({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    connectionLimit: 10
  })
})

const db = new Kysely<Database>({ dialect, log: ["query", "error"] })

export default db
