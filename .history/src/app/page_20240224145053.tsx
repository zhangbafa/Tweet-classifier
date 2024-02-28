'use client'
import Image from 'next/image';
import liu from '../../public/liu.webp'
import { fetchRevenue,fetchCard } from './lib/data';
import { list } from 'postcss';
export const revalidate= 1
export const dynamic = "force-dynamic"
export default async function Chat() {
  
  const revenue = await fetchRevenue()
  console.log(revenue)
  const card = await fetchCard()
 
  return (
    <div>
      <Image src={liu} alt="liu" width={256} height={256} priority></Image>
      { new Date().toLocaleTimeString() }
      {
        revenue.map((product,index) => 
          <li
            key={product.month}
          >
            {index+1}-{product.month}- {product.revenue}
          </li>
        )
      }
    </div>
  )
}