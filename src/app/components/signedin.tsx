'use client'

import { db } from '../../../lib/firebase'
import { doc, setDoc, collection, getDocs, updateDoc, deleteField } from "firebase/firestore"
import Link from "next/link"
import { useEffect, useState } from "react"
import UserDisplay from "./userdisplay"

export default function SignedIn(props : any) {

  const { name, family } = props

  const [names, setNames] = useState([])
  const [data, setData] = useState([])
  const [userData, setUserData] = useState([])
  const [updating, setUpdating] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getDBData = async () => {
      const querySnapshot = await getDocs(collection(db, family))
      let tempNames: any = []
      let tempData:any = []
      let tempUserData:any = []
      querySnapshot.forEach((doc) => {
        tempNames.push(doc.id)
        tempData.push(doc.data())
        if (doc.id == name) {
          tempUserData = doc.data()
        }
      })
      setNames(tempNames)
      setData(tempData)
      setUserData(tempUserData)
    }
    getDBData()
    setLoading(false)
  },[])


  const [item, setItem] = useState({name: '', link: '', description: ''})

  const handleChange = (event:any) => {
      const {name, value} = event.target
      setItem((prevItem) => ({...prevItem, [name]: value}))
  }

  const handleSubmit = (event:any) => {
      event.preventDefault()
      const itemName = item.name
      const newItem = {link: item.link, description: item.description, bought: false}
      AddDBData(itemName, newItem)
      setItem({name: '', link: '', description: ''})
      const tempUserData:any = userData
      tempUserData[itemName] = newItem
      setUserData(tempUserData)
  }

  const AddDBData = async (itemName:any, newItem:any) => {
      await setDoc(doc(db, family, name), {[itemName]: newItem}, {merge: true})
  }

  const handleDelete = async (event:any) => {
    const itemName = event.target.value
    await updateDoc(doc(db, family, name), {[itemName]: deleteField()})
    let tempUserData:any = userData
    delete tempUserData[itemName]
    setUserData(tempUserData)
  }

  if (updating) {
    return(
      <div className='my-10 flex flex-col items-center gap-10 mb-24'>
        <button onClick={() => setUpdating((currState) => !currState)} className="bg-blue-100 font-2xl py-2 px-5 rounded-xl font-bold box-pop transition duration-300 hover:bg-blue-200" >Go Back</button>
        {loading ? <h1 className='text-center'>Loading...</h1> : 
        <>
          <form className="flex flex-col items-center gap-3" onSubmit={handleSubmit}>
            <h1 className='font-semibold text-xl'>Add new item</h1>
            <h2 className='font-semibold text-red-500'>Item names must be unique</h2>
            <div className='flex flex-col gap-4 md:flex-row'>
              <input className="bg-blue-200 px-4 py-2 rounded-xl box-pop" placeholder="Item Name" name='name' value={item.name} onChange={handleChange} required />
              <input className="bg-blue-200 px-4 py-2 rounded-xl box-pop" placeholder="Link (not required)" name='link' value={item.link} onChange={handleChange} />
              <input className="bg-blue-200 px-4 py-2 rounded-xl box-pop" placeholder="Description (not required)" name='description' value={item.description} onChange={handleChange} />
            </div>
              <button className="bg-blue-100 py-2 px-4 rounded-xl font-semibold box-pop transition duration-300 hover:bg-blue-200">ADD ITEM</button>
          </form>
          <div className="w-97 bg-blue-200 px-2 py-5 rounded-xl box-pop sm:w-5/6 lg:w-2/3 xl:w-1/2 md:px-6 lg:px-12">
            <h1 className="text-2xl text-center font-semibold">{name}</h1>
            <hr className="border-black mt-8 mb-4 w-full"></hr>
            <div className="flex flex-col">
              {Object.entries(userData).map((item:any, index:any) => 
              <li className="flex flex-col items-center gap-4" key={index}>
                <p className="font-semibold text-lg">{item[0]}</p>
                {item[1].link != "" ? <Link href={item[1].link} target="_blank" className="bg-blue-400 px-4 py-2 rounded-xl box-pop font-semibold transition duration-300 hover:bg-blue-200">Link</Link> : null}
                <p className="text-center">{item[1].description}</p>
                <button onClick={handleDelete} className="bg-blue-100 py-1 px-4 rounded-xl font-semibold box-pop transition duration-300 hover:bg-blue-200" value={item[0]}>Delete</button>
                <hr className="border-black my-4 w-full"></hr>
              </li>
              )}
            </div>
          </div>
        </>}
      </div>
    )
  } else {
    return(
      <main className="text-center my-10">
        <div className="flex flex-col items-center gap-8">
          <button onClick={() => setUpdating((currState) => !currState)} className="bg-blue-200 font-2xl py-2 px-5 rounded-xl font-bold box-pop transition duration-300 hover:bg-blue-300">Modify your list</button>
        </div>
        <hr className="border-black my-10" ></hr>
        <h1 className='mb-8 mx-2 text-lg font-semibold'>Your list is not visible here so you cannot see what others have bought you already but everyone else is able to see your list. Click the above button to view and modify your own list.</h1>
        {loading ? <h1 className='text-center'>Loading...</h1> : 
        <div className="flex flex-col items-center gap-10">
          {names.map((user, index) => user != name ? <UserDisplay userName={user} currUser={name} family={family} data={data[index]} key={`${user} ${index}`} /> : null)}
        </div>}
      </main>
    )
  }
}