export default function Page() {
    async function createInvoice(formData: FormData) {
      'use server'
   
      const rawFormData = {
        name: formData.get('name'),
        age: formData.get('age'),
        like: formData.get('like'),
      }
   
      // mutate data
      // revalidate cache
    }
   
    return (
        <div>
            <form action={createInvoice}>
                <input type="text" name="name" /><br/>
                <input type="text" name="age" /><br/>
                <input type="text" name="link" /><br/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
  }