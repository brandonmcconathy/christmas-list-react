'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../lib/firebase"

export default function Home() {

  const [name, setName] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    const getDBData = async () => {
      const querySnapshot = await getDocs(collection(db, "people"))
      let tempNames:any = []
      let tempData:any = []
      querySnapshot.forEach((doc) => {
        tempNames.push(doc.id)
        tempData.push(doc.data())
      })
      console.log(tempNames)
      console.log(tempData)
    }
    getDBData()
  },[])

  return (
    <main className="text-center m-10">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-semibold">Christmas List</h1>
        <Link href='/manage' className="bg-blue-200 py-2 px-5 rounded-xl font-semibold box-pop" >ADD/UPDATE ITEMS</Link>
      </div>
      <hr className="border-black my-10" ></hr>
      <div>
        <h1>Data goes here</h1>
      </div>
    </main>
  )
}
