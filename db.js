import 'dotenv/config'
import postgres from "postgres";
const http = require("http");
const { neon } = require("@neondatabase/serverless");

const sql = neon(process.env.DATABASE_URL);

export default sql