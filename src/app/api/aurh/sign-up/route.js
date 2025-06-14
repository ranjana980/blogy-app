import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function POST(req) {
    try {
        const formData = await req.formData()
        const { username, } = formData
        const filePath = path.join(process.cwd(), 'src/utils/constants', 'data.json'); // Path to your JSON file
        let jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const updatedData = jsonData.push({ title, content, likes: 0, rating: 0, author, published_date: new Date, category, comments: 0, profile_image, blog_image });
        fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), 'utf8');
        return NextResponse.json({ message: 'Data Added successfully', data: updatedData });
    } catch (err) {
        return NextResponse.json({ message: err.message });
    }
}