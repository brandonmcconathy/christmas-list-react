

import { doc, setDoc } from "firebase/firestore"
import { useState } from "react"
import { db } from "../../../lib/firebase"

export default function AddItem(props:any) {

    const { name, data } = props

    const [item, setItem] = useState({name: '', link: '', description: ''})

    const handleChange = (event:any) => {
        const {name, value} = event.target
        setItem((prevItem) => ({...prevItem, [name]: value}))
    }

    const handleSubmit = (event:any) => {
        event.preventDefault()
        AddDBData([...data, item])
        setItem({name: '', link: '', description: ''})
    }

    const AddDBData = async (items:any) => {
        await setDoc(doc(db, 'people', name), {items})
    }

    return(
        <form className="" onSubmit={handleSubmit}>
            <input className="bg-blue-200 px-4 py-2 rounded-xl box-pop" placeholder="Name" name='name' value={item.name} onChange={handleChange} required />
            <input className="bg-blue-200 px-4 py-2 rounded-xl box-pop" placeholder="Link" name='link' value={item.link} onChange={handleChange} />
            <input className="bg-blue-200 px-4 py-2 rounded-xl box-pop" placeholder="Description" name='description' value={item.description} onChange={handleChange} />
            <button>ADD ITEM</button>
        </form>
    )
}