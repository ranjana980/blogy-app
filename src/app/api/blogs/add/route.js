import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function POST(req) {
    try {
        const formData = await req.formData()
        const _id = formData.get('_id')
        const title = formData.get('title')
        const category = formData.get('category')
        const content = formData.get('content')
        const author = formData.get('author')
        const profile_image = formData.get('profile_image')
        const rating = formData.get('rating')
        const blogImage = formData.get('blogImage')
        const likes = formData.get('blogImage')
        const comments = formData.get('comments')
        const filePath = path.join(process.cwd(), 'src/utils/constants', 'data.json'); // Path to your JSON file
        const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        if (Array.isArray(jsonData)) {
            jsonData?.unshift({ _id, title, category, comments, content, author, profile_image, rating, blogImage, likes });
            fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf8');
            return NextResponse.json({ message: 'Data Added successfully', data: jsonData });
        }
    } catch (err) {
        return NextResponse.json({ message: err.message });
    }
}