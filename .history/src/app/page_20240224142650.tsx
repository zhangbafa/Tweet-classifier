'use client'
import Image from 'next/image';
import liu from '../../public/liu.webp'
import { fetchRevenue } from './lib/data';
import { list } from 'postcss';
export const revalidate= 3
export default async function Chat() {
  const revenue = await fetchRevenue()
 
  return (
    <div>
      <Image src={liu} alt="liu" width={256} height={256} priority></Image>
      {
        revenue.map(product => 
          <li
            key={product.month}
          >
            {product.month}- {product.revenue}
          </li>
        )
      }
    </div>
  )
}