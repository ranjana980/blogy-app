import multer from "multer";
const upload = multer({ dest: 'src/assets/uploads' })

export async function POST(
    req,
) {
    const formData = await req.formData()
    console.log(formData.get('title'), 'formData')
}
