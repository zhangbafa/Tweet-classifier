export default function Page() {
    async function createInvoice(formData: FormData) {
      'use server'
   
      const rawFormData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
      }
   
      // mutate data
      // revalidate cache
    }
   
    return <form action={createInvoice}>
        <input type="text" name="name" />
        <button type="submit">Update User Name</button>
    </form>
  }