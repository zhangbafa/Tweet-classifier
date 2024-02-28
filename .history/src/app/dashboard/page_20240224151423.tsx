'use client'
import Link from "next/link";
import { usePathname,useRouter,useSearchParams,redirect } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";

async function  getData() {
    await fetch('',{cache:'no-store',next:{revalidate:3600}})
}
// export const revalidate = 60
export default async function Home(){
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return (
        <>
        <Suspense fallback={<p>Loading feed...</p>}>
            <div className="w-full text-center m-10">
                Dashboard - Home
               
            </div>
            </Suspense>
        </>
    )
}