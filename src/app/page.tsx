'use client';
 
import { useChat } from 'ai/react';
 
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md  mx-auto stretch ">
      <div className=''>
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap border-b  border-gray-100 mb-4 p-4">
          {m.role === 'user' ? '我: ' : 'AI: '}
          {m.content}
        </div>
      ))}
      </div>
 
      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="情绪分析,请输入"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}