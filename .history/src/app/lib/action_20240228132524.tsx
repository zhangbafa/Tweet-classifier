import { PostEntrySchema } from "./schema"

export function createPost(state:any,formData:FormData) {
    const rowFormData = {
        username: formData.get('username'),
        password: formData.get('password')
    }

    PostEntrySchema.safeParse({
        
    })
    return rowFormData
}