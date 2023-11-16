'use client'

import { db } from '../../../lib/firebase'
import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"

export default function SignedIn(props : any) {

  const { name } = props

  const [ data, setData ] = useState({})
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    const getDBData = async () => {
      const docRef = doc(db, 'people', name)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setData(docSnap.data().items);
      }
    }

    getDBData()
  },[])

  return(
    <div>
      <h1>name: {name}</h1>
    </div>
  )
}