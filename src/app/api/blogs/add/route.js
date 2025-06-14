import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function POST(req) {
    try {
        const formData = await req.formData()
        const filePath = path.join(process.cwd(), 'src/utils/constants', 'data.json'); // Path to your JSON file
        let jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const updatedData = jsonData.push(formData);
        fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), 'utf8');
        return NextResponse.json({ message: 'Data Added successfully', data: updatedData });
    } catch (err) {
        return NextResponse.json({ message: err.message });
    }
}