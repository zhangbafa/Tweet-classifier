'use client'
import Image from 'next/image';
import liu from '../../public/liu.webp'
import { fetchRevenue } from './lib/data';
import { list } from 'postcss';
export default async function Chat() {
  const revenue  = await fetchRevenue()
  console.log(revenue)
  const listItems = revenue.map(product => 
    <li
      key={product.month}
    >
      {product.month}
    </li>
  );
  return (
    <div>
      <Image src={liu} alt="liu" width={256} height={256} priority></Image>
      {listItems}
    </div>
  )
}