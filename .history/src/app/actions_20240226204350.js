
async function createInvoice(formData: FormData) {
    'use server'
 
    const rawFormData = {
      name: formData.get('name'),
      age: formData.get('age'),
      like: formData.get('like'),
    }
    console.log(rawFormData)
    // mutate data
    // revalidate cache
  }