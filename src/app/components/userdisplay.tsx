import ItemDisplay from "./itemdisplay"

export default function UserDisplay(props: any) {

  const { name, data } = props

  return(
    <div className="w-1/3 bg-blue-200 px-5 py-3 rounded-xl box-pop">
      <h1 className="text-2xl text-left font-semibold mb-4">{name}</h1>
      <ul className="flex flex-col gap-6">
        {data.map((item: any, index:any) => <ItemDisplay item={item} key={index} />)}
      </ul>
    </div>
  )
}