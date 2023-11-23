'use client'

import Link from "next/link"

export default function ItemDisplay( {item}: any ) {

  const { name, link, description } = item

  if (link == '') {
    return(
      <>
        <li className="flex flex-col items-center gap-4">
          <p className="font-semibold text-lg">{name}</p>
          <p className="text-center">{description}</p>
        </li>
        <hr className="border-black my-4 w-full"></hr>
      </>
    )
  }

  return(
    <>
      <li className="flex flex-col items-center gap-4">
        <p className="font-semibold text-lg">{name}</p>
        <Link href={link} target="_blank" className="bg-blue-400 px-2 py-1 rounded-xl box-pop font-semibold transition duration-300 hover:bg-blue-200">Link</Link>
        <p className="text-center">{description}</p>
      </li>
      <hr className="border-black my-4 w-full"></hr>
    </>
  )
}