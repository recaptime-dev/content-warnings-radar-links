import { DbClient } from "../../deps.ts"

export const datastore = new DbClient({
    user: Deno.env.get("DB_USER"),
    password: Deno.env.get("DB_PASSWORD"),
    hostname: Deno.env.get("DB_HOST"),
    port: Deno.env.get("DB_PORT"),
    database: Deno.env.get("DB_DATABASE")
})
export async function connectDb() {
    await datastore.connect()
}
