import {z} from 'zod'

const user = z.object({
    name: z.string().min(1,{message:'name is required'}),
    sex: z.string().min(1,{message:'sex is required'}),
})