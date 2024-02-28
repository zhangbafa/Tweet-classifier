'use client'
 
import { useChat } from 'ai/react';
import Image from 'next/image';
import type { Metadata } from 'next';

export default function Chat() {
  return (
    <div>
      <Image src="http://img.ttbaojia.com/emoji/zany_face_3d.png" alt="liu" width={256} height={256}></Image>
    </div>
  )
}