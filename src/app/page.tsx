'use client'

import { useState } from "react"
import Bet from "./components/bet"

export default function Home() {

  const [stage, setStage] = useState('home')

  if (stage == 'home') {
    return(
      <main className="text-center">
        <h1>Blackjack</h1>
        <Bet />
      </main>
    )
  }

  return (
    <main className="text-center">
      <h1>Blackjack</h1>
      <section>
        <h2>{stage}</h2>
      </section>
      <Bet />
    </main>
  )
}
