// JavaScripr Assincrono
// await async
// Fullfilled

import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://lucase101010:963258741@cluster0.vk7g7kv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
