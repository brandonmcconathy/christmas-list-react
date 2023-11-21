'use client'

import { db } from '../../../lib/firebase'
import UserDisplay from './userdisplay'
import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import Link from 'next/link'

export default function SignedIn(props : any) {

  const { name } = props

  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    const getDBData = async () => {
      const docRef = doc(db, 'people', name)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setData(docSnap.data().items)
      }
    }

    getDBData()
    setLoading(false)
  },[])

  return(
    <div className='my-10 flex flex-col items-center gap-10'>
      <Link href='/' className="bg-blue-100 py-1 px-4 rounded-xl font-semibold box-pop text-xs" >Go Back</Link>
      {loading ? <h1 className='text-center'>Loading...</h1> : 
      <>
        <button className="bg-blue-200 px-4 py-2 rounded-xl box-pop font-semibold">ADD/UPDATE</button>
        <UserDisplay name={name} data={data} />
      </>}
    </div>
  )
}