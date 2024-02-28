import { PostEntrySchema } from "./schema"

export function createPost(state:any,formData:FormData) {
    const rowFormData = {
        username: formData.get('username'),
        password: formData.get('password')
    }

    const result =  PostEntrySchema.safeParse({
        username: formData.get('username'),
        password: formData.get('password')
    })

    if(result.success){
        return {data:result.data}
    }

    if(result.error){
        return {error:result.error.format()}
    }

    return rowFormData
}