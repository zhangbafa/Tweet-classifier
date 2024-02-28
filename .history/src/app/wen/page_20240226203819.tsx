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
        <div className="ml-10 mt-10">
            <form action={createInvoice}>
                <input type="text" name="name" className="border"/><br/>
                <input type="text" name="age" className="border"/><br/>
                <input type="text" name="link" className="border"/><br/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
  }