'use client'

import { useState } from "react"

export default function Bet() {

    const [bet, setBet] = useState(0)

    const handleBet = (event:any) => {
        const value = Number(event.target.value)
        if (event.target.name == 'positive') {
            setBet((prevBet) => prevBet + value)
        } else {
            setBet((prevBet) => prevBet - value)
            if (bet < value) {
                setBet(0)
            }
        }
    }

    return(
        <div>
            <h1>Place your bet:</h1>
            <h2>{bet}</h2>
            <div className="flex flex-col justify-center items-center text-center gap-5">
                <div className="flex justify-center items-center gap-5">
                    <button name='positive' value='1' className="bg-amber-200 w-16 text-black rounded-full py-5 px-7 box-pop" onClick={handleBet}>1</button>
                    <button name='positive' value='5' className="bg-amber-200 w-16 text-black rounded-full py-5 px-7 box-pop" onClick={handleBet}>5</button>
                    <button name='positive' value='10' className="bg-amber-200 w-16 text-black rounded-full py-5 px-6 box-pop" onClick={handleBet}>10</button>
                    <button name='positive' value='25' className="bg-amber-200 w-16 text-black rounded-full py-5 px-6 box-pop" onClick={handleBet}>25</button>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <button name='negative' value='1' className="bg-amber-200 w-16 text-black rounded-full py-5 px-6 box-pop" onClick={handleBet}>-1</button>
                    <button name='negative' value='5' className="bg-amber-200 w-16 text-black rounded-full py-5 px-6 box-pop" onClick={handleBet}>-5</button>
                    <button name='negative' value='10' className="bg-amber-200 w-16 text-black rounded-full p-5 box-pop" onClick={handleBet}>-10</button>
                    <button name='negative' value='25' className="bg-amber-200 w-16 text-black rounded-full p-5 box-pop" onClick={handleBet}>-25</button>
                </div>
            </div>
        </div>
    )
}