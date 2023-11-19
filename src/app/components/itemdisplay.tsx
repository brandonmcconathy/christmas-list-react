'use client'

import Link from "next/link"

export default function ItemDisplay( {item}: any ) {

  const { name, link, description } = item

  if (link == '') {
    return(
      <li className="flex items-center ml-4 gap-5">
        <p className="font-bold">-</p>
        <p className="text-lg font-semibold">{name}</p>
        <p className="">{description}</p>
      </li>
    )
  }

  return(
    <li className="flex items-center ml-4 gap-5">
      <p className="font-bold">-</p>
      <p className="text-lg font-semibold">{name}</p>
      <Link href={link} target="_blank" className="bg-blue-400 px-2 py-1 rounded-xl box-pop font-semibold transition duration-300 hover:bg-blue-200">Link</Link>
      <p className="">{description}</p>
    </li>
  )
}