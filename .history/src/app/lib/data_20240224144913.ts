import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
export const dynamic = "force-dynamic"
export async function fetchRevenue(){
    noStore()
    console.log('fetchRevenue')
    await new Promise((resolve) => setTimeout(resolve, 30000));
    try {
        const data = await sql`select * from revenue`
        return data.rows
    } catch (error) {
        console.error('Database Error:', error)
        // throw new Error('Faild to fetch revenue data.')
    }
}

export async function fetchCard() {
    console.log('fetchCard')
    try {
        const data = await sql`select * from invoices`
        return data.rows
    } catch (error) {
        return []
    }
   
}