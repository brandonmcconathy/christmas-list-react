'use client'

import { useState } from "react"

export default function AddItem() {

    const [item, setItem] = useState({name: '', link: '', description: ''})

    const handleChange = () => {
        console.log('here')
    }

    return(
        <form>
            <input className="bg-blue-200 px-4 py-2 rounded-xl box-pop" placeholder="Name" value={item.name} onChange={handleChange} required />
            <input className="bg-blue-200 px-4 py-2 rounded-xl box-pop" placeholder="Link" value={item.link} onChange={handleChange} />
            <input className="bg-blue-200 px-4 py-2 rounded-xl box-pop" placeholder="Description" value={item.description} onChange={handleChange} />
            <button>ADD ITEM</button>
        </form>
    )
}