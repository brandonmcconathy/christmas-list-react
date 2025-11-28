'use client'

import Link from "next/link"
import { useState } from "react"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../../../lib/firebase"

export default function ItemDisplay( props: any ) {

  const {item, name, userName, currUser, family} = props
  const { link, description, bought, boughtBy } = item

  const [itemBought, setItemBought] = useState(bought)
  const [itemBoughtBy, setItemBoughtBy] = useState(boughtBy)

  const handleClick = async () => {
    await updateDoc(doc(db, family, userName), {[name + ".bought"]: !itemBought})
    await updateDoc(doc(db, family, userName), {[name + ".boughtBy"]: currUser})
    setItemBought((itemBought:boolean) => !itemBought)
    setItemBoughtBy(currUser)
  }

  return(
    <>
      <li className="flex flex-col items-center gap-4">
        <p className="font-semibold text-lg">{name}</p>
        {itemBought ? <p className="text-red-500 text-xl font-bold -my-2">Already Bought by {itemBoughtBy}</p> : null}
        {link != "" ? <Link href={link} target="_blank" className="bg-blue-400 px-4 py-2 rounded-xl box-pop font-semibold transition duration-300 hover:bg-blue-200">Link</Link> : <></>}
        <p className="text-center">{description}</p>
        {itemBought ? null : <button onClick={handleClick} className="bg-blue-400 self-end px-2 py-1 mr-2 rounded-lg box-pop font-semibold transition duration-300 hover:bg-blue-200">Mark as bought</button>}
      </li>
      <hr className="border-black my-4 w-full"></hr>
    </>
  )
}