import {createInvoice} from '@/app/actions'
export default function Page() {
  
   
    return (
        <div className="ml-10 mt-10">
            <form action={createInvoice}>
                <input type="text" value={1} name="name" className="border"/><br/>
                <input type="text" value={2} name="age" className="border"/><br/>
                <input type="text" value={3} name="like" className="border"/><br/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
  }