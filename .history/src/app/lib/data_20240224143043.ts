import { sql } from "@vercel/postgres";

export async function fetchRevenue(){
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