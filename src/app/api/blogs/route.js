import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'src/utils/constants', 'data.json'); // Path to your JSON file
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return NextResponse.json({ message: "Data Found SuccessFully", data: jsonData });
  } catch (error) {
    return NextResponse.error();
  }
}