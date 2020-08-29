import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

const client = new MongoClient();

client.connectWithUri("mondodb://localhost:27017");

const db = client.database("dasjs");
export default db;
