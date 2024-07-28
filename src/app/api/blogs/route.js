import { NextResponse } from 'next/server';
import User from  '../../modals/post'

export async function GET() {
  try {
    const posts = await User.find();
    console.log(posts,'posssss')
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
