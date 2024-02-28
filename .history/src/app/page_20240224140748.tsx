'use client'
import Image from 'next/image';
import liu from '../../public/liu.webp'
import { fetchRevenue } from './lib/data';
export default async function Chat() {
  const revenue  = await fetchRevenue()
  console.log(revenue)
  return (
    <div>
      <Image src={liu} alt="liu" width={256} height={256} priority></Image>
    </div>
  )
}