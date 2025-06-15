import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function POST(req) {
    try {
        const formData = await req.formData()
        const id = formData.get('_id')
        const user_name = formData.get('user_name')
        const gender = formData.get('gender')
        const email = formData.get('email')
        const phone = formData.get('phone')
        const profile_image = formData.get('profile_image')
        const filePath = path.join(process.cwd(), 'src/utils/constants', 'users.json'); // Path to your JSON file
        const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        if (Array.isArray(jsonData)) {
            const userObj = jsonData.find((item) => item._id === id)
            userObj['user_name'] = user_name
            userObj['gender'] = gender
            userObj['email'] = email
            userObj['phone'] = phone
            userObj['profile_image'] = profile_image
            fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf8');
            return NextResponse.json({ message: 'Data Updated successfully', data: jsonData });
        }
    } catch (err) {
        return NextResponse.json({ message: err.message });
    }
}