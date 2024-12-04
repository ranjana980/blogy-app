// app/api/movies.js
import { NextResponse } from 'next/server';
import {connectToDatabase} from '../../lib/mongodb';

export async function GET() {
  try {
    var client = new MongoClient(url);
var database = client.GetDatabase(url.DatabaseName);
    const client = await connectToDatabase();
    // const db = client.db("sample_mflix");
    // const movies = await db
    //   .collection("movies")
    //   .find({})
    //   .sort({ metacritic: -1 })
    //   .limit(10)
    //   .toArray();
    return NextResponse.json({message:'hello'});
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}