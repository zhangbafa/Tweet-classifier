'use client'
import Image from 'next/image';
import liu from '../../public/liu.webp'
import { fetchRevenue,fetchCard } from './lib/data';
import { revalidatePath } from 'next/cache'

// export const revalidate = 0 
// export const dynamic = "force-dynamic"
export default async function Chat() {
  revalidatePath('/')
  const revenue = await fetchRevenue()
  console.log(revenue?.length)
  const card = await fetchCard()
 
  return (
    <div>
      <Image src={liu} alt="liu" width={256} height={256} priority></Image>
      { new Date().toLocaleTimeString() }
      {
        revenue?.map((product,index) => 
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