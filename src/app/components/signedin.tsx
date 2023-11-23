'use client'

import { db } from '../../../lib/firebase'
import UserDisplay from './userdisplay'
import { useEffect, useState } from "react"
import { doc, getDoc, setDoc } from "firebase/firestore"
import Link from 'next/link'

export default function SignedIn(props : any) {

  const { name } = props

  const [ data, setData ] = useState([])
  const [item, setItem] = useState({name: '', link: '', description: ''})
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

    const handleChange = (event:any) => {
        const {name, value} = event.target
        setItem((prevItem) => ({...prevItem, [name]: value}))
    }

    const handleSubmit = (event:any) => {
        event.preventDefault()
        AddDBData([...data, item])
        setItem({name: '', link: '', description: ''})
        const tempData:any = data
        tempData.push(item)
        setData(tempData)
    }

    const AddDBData = async (items:any) => {
        await setDoc(doc(db, 'people', name), {items})
    }

  return(
    <div className='my-10 flex flex-col items-center gap-10'>
      <Link href='/' className="bg-blue-100 py-1 px-4 rounded-xl font-semibold box-pop text-xs" >Go Back</Link>
      {loading ? <h1 className='text-center'>Loading...</h1> : 
      <>
        <form className="flex flex-col items-center gap-3" onSubmit={handleSubmit}>
          <h1 className='font-semibold text-lg'>Add new item</h1>
          <div className='flex gap-4'>
            <input className="bg-blue-200 px-4 py-2 rounded-xl box-pop" placeholder="Name" name='name' value={item.name} onChange={handleChange} required />
            <input className="bg-blue-200 px-4 py-2 rounded-xl box-pop" placeholder="Link" name='link' value={item.link} onChange={handleChange} />
            <input className="bg-blue-200 px-4 py-2 rounded-xl box-pop" placeholder="Description" name='description' value={item.description} onChange={handleChange} />
          </div>
            <button className="bg-blue-100 py-1 px-4 rounded-xl font-semibold box-pop">ADD ITEM</button>
        </form>
        <UserDisplay name={name} data={data} />
      </>}
    </div>
  )
}