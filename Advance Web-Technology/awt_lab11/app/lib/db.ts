import { Pool } from "pg";

const pool =  new Pool({
    user : process.env.DB_USER,
    host: process.env.DB_HOST,
    password : process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT)
    
})

export const query = (text: string, params: any[] = []) => {
  return pool.query(text, params);
};