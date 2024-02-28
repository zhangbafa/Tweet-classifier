'use client'
import Image from 'next/image';
import liu from '../../public/liu.webp'

export default function Chat() {
  return (
    <div>
      <Image src={liu} alt="liu" width={256} height={256} priority></Image>
    </div>
  )
}