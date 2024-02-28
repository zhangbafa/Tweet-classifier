import { NextResponse } from "next/server";

// export const dynamic = 'forcep'
export async function GET(request,{params}) {
    console.log('sdfdsf')
    return NextResponse.json({data:'d'})
}