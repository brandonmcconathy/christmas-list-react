import ItemDisplay from "./itemdisplay"

export default function UserDisplay(props: any) {

  const { name, data } = props

  return(
    <div className="w-7/12 bg-blue-200 px-10 py-5 rounded-xl box-pop">
      <h1 className="text-2xl text-center font-semibold mb-4">{name}</h1>
      <ul className="flex flex-col gap-6">
        {data.map((item: any, index:any) => <ItemDisplay item={item} key={index} />)}
      </ul>
    </div>
  )
}