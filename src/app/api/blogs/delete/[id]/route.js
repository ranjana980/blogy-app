import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function DELETE(req, { params }) {
    try {
        const { id } = await params
        const filePath = path.join(process.cwd(), 'src/utils/constants', 'data.json'); // Path to your JSON file
        const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const updatedData = jsonData.filter(item => item._id !== id);
        fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), 'utf8');
        return NextResponse.json({ message: 'Data deleted successfully', data: updatedData });
    } catch (err) {
        return NextResponse.json({ message: err.message });
    }
}