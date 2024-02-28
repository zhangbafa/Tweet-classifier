import {z} from 'zod'

export const GuestEntrySchema = z.object({
    name: z.string().min(1,{message:'name is required'}),
    age: z.string().min(1,{message:'age is required'}),
})

export const PostEntrySchema = z.object({
    username: z.string.min(1,{message:"username is required"}),
    password:z.string().min(1,{message:'password is required'})
})