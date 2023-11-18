'use client'

import Link from "next/link"

export default function ItemDisplay( {item}: any ) {

  const { name, link, description } = item

  return(
    <li className="flex flex-col ml-4 gap-1">
      <div className="flex items-center gap-6">
        <p className="text-lg">{name}</p>
        <Link href={link} target="_blank" className="bg-blue-400 px-2 py-1 rounded-xl box-pop font-semibold">Link</Link>
      </div>
      <p className="ml-5">{description}</p>
    </li>
  )
}