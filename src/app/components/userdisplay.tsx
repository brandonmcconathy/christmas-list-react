import ItemDisplay from "./itemdisplay"

export default function UserDisplay(props: any) {

  const { name, data } = props

  return(
    <div className="w-1/3 bg-blue-200 px-5 py-3 rounded-xl box-pop">
      <h1 className="text-2xl text-left font-semibold">{name}</h1>
      <ul>
        {data.map((item: any, index:any) => <ItemDisplay item={item} key={index} />)}
      </ul>
    </div>
  )
}