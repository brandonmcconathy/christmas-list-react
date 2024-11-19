import ItemDisplay from "./itemdisplay"

export default function UserDisplay(props: any) {

  const { userName, family, data } = props

  return(
    <div className="w-97 bg-blue-200 px-2 py-5 rounded-xl box-pop sm:w-5/6 lg:w-2/3 xl:w-1/2 md:px-6 lg:px-12">
      <h1 className="text-2xl text-center font-semibold">{userName}</h1>
      <hr className="border-black mt-8 mb-4 w-full"></hr>
      <ul className="flex flex-col">
        {Object.entries(data).map((name: any, index:any) => <ItemDisplay item={name[1]} name={name[0]} userName={userName} family={family} key={index} />)}
      </ul>
    </div>
  )
}