'use client'

import { db } from '../../../lib/firebase'
import { useEffect } from "react"
import { doc, getDoc } from "firebase/firestore"

export default function SignedIn(props : any) {

  const { name } = props

  useEffect(() => {
    const getDBData = async () => {
      const docRef = doc(db, 'people', name)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    getDBData()
  },[])

  return(
    <div>
      <h1>name: {name.charAt(0).toUpperCase() + name.slice(1)}</h1>
    </div>
  )
}