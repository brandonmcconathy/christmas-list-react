'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../lib/firebase"
import UserDisplay from "./components/userdisplay"

export default function Home() {

  const [names, setNames] = useState([])
  const [data, setData] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    const getDBData = async () => {
      const querySnapshot = await getDocs(collection(db, "people"))
      let tempNames: any = []
      let tempData:any = []
      querySnapshot.forEach((doc) => {
        tempNames.push(doc.id)
        tempData.push(doc.data().items)
      })
      setNames(tempNames)
      setData(tempData)
    }
    getDBData()
    setLoading(false)
  },[])

  return (
    <main className="text-center my-10">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-semibold">Christmas List</h1>
        <Link href='/manage' className="bg-blue-200 py-2 px-5 rounded-xl font-semibold box-pop transition duration-300 hover:bg-blue-300" >ADD/UPDATE ITEMS</Link>
      </div>
      <hr className="border-black my-10" ></hr>
      {loading ? <h1 className='text-center'>Loading...</h1> : 
      <div className="flex flex-col items-center">
        {names.map((name, index) => <UserDisplay name={name} data={data[index]} key={`${name} ${index}`} />)}
      </div>}
    </main>
  )
}
