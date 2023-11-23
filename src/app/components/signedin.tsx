'use client'

import { db } from '../../../lib/firebase'
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

    const handleDelete = async (event:any) => {
      const index = event.target.value
      let tempData:never[] = data
      setData([...tempData.slice(0, index), ...tempData.slice(Number(index)+1)])
      tempData.splice(index, 1)
      AddDBData(tempData)
    }

  return(
    <div className='my-10 flex flex-col items-center gap-10 mb-24'>
      <Link href='/' className="bg-blue-100 py-1 px-4 rounded-xl font-semibold box-pop text-xs transition duration-300 hover:bg-blue-200" >Go Back</Link>
      {loading ? <h1 className='text-center'>Loading...</h1> : 
      <>
        <form className="flex flex-col items-center gap-3" onSubmit={handleSubmit}>
          <h1 className='font-semibold text-lg'>Add new item</h1>
          <div className='flex flex-col gap-4'>
            <input className="bg-blue-200 px-4 py-2 rounded-xl box-pop" placeholder="Name" name='name' value={item.name} onChange={handleChange} required />
            <input className="bg-blue-200 px-4 py-2 rounded-xl box-pop" placeholder="Link (not required)" name='link' value={item.link} onChange={handleChange} />
            <input className="bg-blue-200 px-4 py-2 rounded-xl box-pop" placeholder="Description (not required)" name='description' value={item.description} onChange={handleChange} />
          </div>
            <button className="bg-blue-100 py-1 px-4 rounded-xl font-semibold box-pop transition duration-300 hover:bg-blue-200">ADD ITEM</button>
        </form>
        <div className="w-97 bg-blue-200 px-2 py-5 rounded-xl box-pop">
          <h1 className="text-2xl text-center font-semibold">{name}</h1>
          <hr className="border-black mt-8 mb-4 w-full"></hr>
          <ul className="flex flex-col">
            {data.map((item: any, index:any) => (
            item.link == '' ? 
            <li className="flex flex-col items-center gap-4" key={index}>
              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-center">{item.description}</p>
              <button onClick={handleDelete} className="bg-blue-100 py-1 px-4 rounded-xl font-semibold box-pop transition duration-300 hover:bg-blue-200" value={index}>Delete</button>
              <hr className="border-black my-4 w-full"></hr>
            </li> : 
            <li className="flex flex-col items-center gap-4" key={index}>
              <p className="font-semibold text-lg">{item.name}</p>
              <Link href={item.link} target="_blank" className="bg-blue-400 px-2 py-1 rounded-xl box-pop font-semibold transition duration-300 hover:bg-blue-200">Link</Link>
              <p className="text-center">{item.description}</p>
              <button onClick={handleDelete} className="bg-blue-100 py-1 px-4 rounded-xl font-semibold box-pop transition duration-300 hover:bg-blue-200" value={index}>Delete</button>
              <hr className="border-black my-4 w-full"></hr>
            </li>
            ))}
          </ul>
        </div>
      </>}
    </div>
  )
}