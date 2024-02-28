import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { NextResponse } from 'next/server';
 
// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  baseURL: process.env.OPENAI_BASEURL,
  apiKey: process.env.OPENAI_API_KEY,
});
 


export async function POST(req) {
  const { messages } = await req.json();
  let msg = [ {
    "role": "system",
    "content": "您将收到一条推文，您的任务是将其情绪分类为积极、中立或消极。"
  }]
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages:[...msg,...messages],
    temperature: 0.7,
    max_tokens: 64,
    top_p: 1
  });

 
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // const a = stream.pop()
  // Respond with the stream
  return new StreamingTextResponse(stream);
}

export async function GET(request,{params}) {
  // const res = await fetch('https://dog-api.kinduff.com/api/facts')
  // const data = res.json()
  const pathname = request.nextUrl.pathname
	// 访问 /home?name=lee, searchParams 的值为 { 'name': 'lee' }
	const searchParams = request.nextUrl.searchParams
  return NextResponse.json(searchParams.params)
}