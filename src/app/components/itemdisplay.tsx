'use client'

export default function ItemDisplay(props: any) {

  const { itemName, link, description } = props

  return(
    <li>
      <p>{itemName}</p>
      <p>{link}</p>
      <p>{description}</p>
    </li>
  )
}