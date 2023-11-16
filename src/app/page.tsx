import Link from "next/link"

export default function Home() {
  return (
    <main className="text-center m-10">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-semibold">Christmas List</h1>
        <Link href='/signin' className="bg-blue-300 py-2 px-5 rounded-xl font-semibold box-pop" >ADD/UPDATE ITEMS</Link>
      </div>
      <hr className="border-black my-10" ></hr>
      <div>
        <h1>Data goes here</h1>
      </div>
    </main>
  )
}
