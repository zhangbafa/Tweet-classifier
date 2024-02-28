'use server'
// import {GuestEntrySchema} from './schema'
import GuestE
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
    console.log(rawFormData)
    return {
        error:'zhang'
    }
    // mutate data
    // revalidate cache
  }