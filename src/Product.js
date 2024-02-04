import React from 'react'

export default function Product({name, price, description, imageUrl}) {
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <p>{description}</p>
      <img src={imageUrl}></img>
    </div>
  )
}