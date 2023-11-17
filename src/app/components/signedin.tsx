'use client'

import { db } from '../../../lib/firebase'
import ItemDisplay from './itemdisplay'
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
    <div>
      {loading ? <h1 className='text-center'>Loading...</h1> : 
      <div className='text-center flex flex-col items-center'>
        <h1>name: {name}</h1>
        <ul>
          {data.map((item: any, index) => <ItemDisplay item={item} key={index} />)}
        </ul>
      </div>}
      
    </div>
  )
}