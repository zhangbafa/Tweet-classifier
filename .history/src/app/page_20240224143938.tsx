'use client'
import Image from 'next/image';
import liu from '../../public/liu.webp'
import { fetchRevenue,fetchCard } from './lib/data';
import { list } from 'postcss';
export const revalidate= 30
export default async function Chat() {
  const revenue = await fetchRevenue()
  const card = await fetchCard()
 
  return (
    <div>
      <Image src={liu} alt="liu" width={256} height={256} priority></Image>
      { new Date().toLocaleTimeString() }
      {
        revenue.map(product => 
          <li
            key={product.month}
          >
            {product.month}- {product.revenue}
          </li>
        )
      }
      {
        card.map(c => 
          <li
            key={c.id}
          >
            {c.id}- {c.status}-{c.amount}
          </li>
        )
      }
    </div>
  )
}