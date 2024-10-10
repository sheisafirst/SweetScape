import React from 'react'

export default function CardEdit({ title, ingredients, image, jam }) {
  return (
    <div className="container">
      <div className='grid-cols-3'>
        <div>
          <img src={image} alt={title} />
        </div>
        <div>
          <h1>{title}</h1>
          <p>{ingredients}</p>
          <p>{jam}</p>
        </div>
      </div>
    </div>
  )
}
