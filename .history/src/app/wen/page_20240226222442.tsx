'use client'
import {createInvoice} from '@/app/actions'
import { useFormState, useFormStatus } from 'react-dom'

export default function Page() {
  
    const [state,formAction] = useFormState(createInvoice,null)
    return (
        <div className="ml-10 mt-10">
            <form action={formAction}>
                <input type="text"  name="name" className="border w-4/5"/><br/>
                <input type="text"  name="age" className="border"/><br/>
                <input type="text"  name="like" className="border"/><br/>
                <button type="submit">submit</button>-----
                <button formAction={formAction}>click</button>
                <br/>
                <SubmitButton/>
            </form>
            <div style={{background:'#eee'}}>
                {JSON.stringify(state,null,2)}
            </div>
        </div>
    )
  }

function SubmitButton(){
    const {pending} = useFormStatus()
    return (
        <button 
            disabled={pending}
            >
                {pending?'submiting...':'submit'}
            </button>
    )
}