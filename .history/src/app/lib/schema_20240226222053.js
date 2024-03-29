import {z} from 'zod'

export const GuestEntrySchema = z.object({
    name: z.string().min(1,{message:'name is required'}),
    age: z.string().min(1,{message:'age is required'}),
})