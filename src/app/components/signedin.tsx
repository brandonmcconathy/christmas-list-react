'use client'

import { db } from '../../../lib/firebase'
import UserDisplay from './userdisplay'
import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"

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
    <div className='m-10'>
      {loading ? <h1 className='text-center'>Loading...</h1> : 
      <div className='flex flex-col items-center gap-10'>
        <button className="bg-blue-200 px-4 py-2 rounded-xl box-pop font-semibold">ADD/UPDATE</button>
        <UserDisplay name={name} data={data} />
      </div>}
    </div>
  )
}