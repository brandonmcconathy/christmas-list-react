'use client'

import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../lib/firebase"
import SignIn from "./components/signin"

export default function Home() {

  return(
    <div className="text-center my-10">
      <h1 className="text-4xl font-semibold px-4">Family Christmas List</h1>
      <SignIn />
    </div>
  )
}