'use client'

export default function ItemDisplay( {item}: any ) {

  const { name, link, description } = item

  return(
    <li>
      <p>{name}</p>
      <p>{link}</p>
      <p>{description}</p>
    </li>
  )
}