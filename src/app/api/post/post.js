// pages/api/posts.js
// import mongoose from 'mongoose';
import Post from '../../modals/post';

export default async function handler(req, res) {
  console.log(req.method,'methodss is get')
  // await mongoose.connect(process.env.MONGODB_URI);
  res.json({message:'sending'})

  // if (req.method === 'GET') {
  //   const posts = await Post.find({});
  //   res.status(200).json(posts);
  // } else if (req.method === 'POST') {
  //   const post = new Post(req.body);
  //   await post.save();
  //   res.status(201).json(post);
  // } else {
  //   res.setHeader('Allow', ['GET', 'POST']);
  //   res.status(405).end(`Method ${req.method} Not Allowed`);
  // }
}
