'use server'
export async function createInvoice(formData) {
 
    const rawFormData = {
      name: formData.get('name'),
      age: formData.get('age'),
      like: formData.get('like'),
    }
    console.log(rawFormData)
    return {
        error:'zhang'
    }
    // mutate data
    // revalidate cache
  }