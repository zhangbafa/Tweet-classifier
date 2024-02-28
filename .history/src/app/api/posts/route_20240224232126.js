// export const dynamic = 'force-dynamic'

export async function GET(request,{params}) {
    const resp = new Date.now()
    return Response.json({data:resp∆})
  }