'use client'
import { useFormState } from "react-dom"
import { createPost } from "../lib/action"

export default function Page() {
    const [state,formAction] = useFormState(createPost,null)
    if(state?.error==0){
        alert('success')
    }
    return (
        <div className="w-full bg-slate-400 h-screen flex justify-center items-center">
            <form action={formAction} method="post" className="w-80">
                <div>
                    <input placeholder="username" name="username" type="text" className="w-full h-12 pl-3 rounded-t-sm border border-b-0"/>
                </div>
                <div>
                    <input placeholder="password" type="password" name="password" className="w-full h-12 pl-3 rounded-b-sm border border-t-0"/>
                </div>
                <div>
                    <button type="submit" className="bg-black text-center w-full h-12 mt-4 rounded-sm text-white text-2xl">submit</button>
                </div>
                <div className="text-left mt-10 p-2 border">
                    {JSON.stringify(state)}
                </div>
            </form>
            
        </div>
    )
}