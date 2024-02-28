import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";}
export async function fetchRevenue(){
    noStore()
    try {
        const data = await sql`select * from revenue`
        return data.rows
    } catch (error) {
        console.error('Database Error:', error)
        // throw new Error('Faild to fetch revenue data.')
    }
}

export async function fetchCard() {
    const data = await sql`select * from invoices`
    return data.rows
}