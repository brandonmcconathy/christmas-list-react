'use client'

import SignedIn from "./signedin"
import { useState } from "react"

export default function SignIn() {

  const [ name, setName ] = useState('')
  const [ family, setFamily ] = useState("palmer")
  const [ signedIn, setSignedIn ] = useState(false)

  const handleChange = (event: any) => {
    setName(event.target.value)
  }

  const handleFamilyChange = (event: any) => {
    setFamily(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    setSignedIn(true)
  }

  if (signedIn) {
    return(
      <SignedIn name={name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()} family={family} />
    )
  } else {
    return(
      <div className="text-center m-10 flex flex-col gap-8 items-center">
        <h1 className="text-2xl font-semibold">Enter your name to continue:</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
          <input className="bg-blue-200 px-4 py-2 rounded-xl box-pop" placeholder="Name" value={name} onChange={handleChange} required />
          <p className="text-gray-500">If you have already signed up use the exact same name as before.</p>
          <div className="bg-blue-200 flex flex-col justify-center items-center px-4 py-2 rounded-xl gap-2">
            <label htmlFor="family" className="font-semibold">Choose a family list:</label>
            <select name="family" id="family" value={family} onChange={handleFamilyChange} className="rounded-lg box-pop px-2 py-1">
              <option value="palmer">Palmer</option>
              <option value="jones">Jones</option>
            </select>
          </div>
          <button className="bg-blue-200 px-4 py-2 rounded-xl box-pop font-semibold transition duration-300 hover:bg-blue-300">CONTINUE</button>
        </form>
      </div>
    )
  }
}