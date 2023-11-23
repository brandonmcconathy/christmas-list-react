import ItemDisplay from "./itemdisplay"

export default function UserDisplay(props: any) {

  const { name, data } = props

  return(
    <div className="w-97 bg-blue-200 px-2 py-5 rounded-xl box-pop">
      <h1 className="text-2xl text-center font-semibold">{name}</h1>
      <hr className="border-black mt-8 mb-4 w-full"></hr>
      <ul className="flex flex-col">
        {data.map((item: any, index:any) => <ItemDisplay item={item} key={index} />)}
      </ul>
    </div>
  )
}