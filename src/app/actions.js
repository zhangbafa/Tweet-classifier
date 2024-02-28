'use server'
import {GuestEntrySchema} from '@/app/lib/schema'
export async function createInvoice(state,formData) {
 
    const rawFormData = {
      name: formData.get('name'),
      age: formData.get('age'),
      like: formData.get('like'),
    }

    const result = GuestEntrySchema.safeParse({
        name: formData.get('name'),
        age: formData.get('age')
    })

    if(result.success){
      return {data:result.data}
    }

    if(result.error){
      return {error:result.error.format()}
    }
    // mutate data
    // revalidate cache
  }