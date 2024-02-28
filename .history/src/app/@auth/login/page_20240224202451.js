'use client'
// app/@auth/login/page.js
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  return (
    <div style={{width: '200px', height: '100px', backgroundColor: "red"}}>
      <span onClick={() => router.back()}>Close Modal</span>
      <h1>Modal Content</h1>
    </div>
  )
}
