'use client'
import Link from "next/link";
import { usePathname,useRouter,useSearchParams,redirect } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";

async function  getData() {
    await fetch('',{cache:'no-store',next:{revalidate:3600}})
}
// export const revalidate = 60
export default function Home(){
    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()                                                                                                                                                                           
    // router.push('/',{scroll:false})
    const handlegoto = (()=>{
        // router.push('/')
        const params = new URLSearchParams(searchParams.toString())
        console.log(params.get('name'),searchParams.get('id'))
    })
    return (
        <>
        <Suspense fallback={<p>Loading feed...</p>}>
            <div className="w-full text-center m-10">
                Dashboard - Home
                <p>
                    {pathname}
                </p>
                <p>
                <Link href="/" >chat</Link>
                </p>
                <p>
                    <button onClick={handlegoto}>gotohome</button>
                </p>
            </div>
            </Suspense>
        </>
    )
}