import React, { useState } from 'react'
import './card.css'
import MaterialIcon from 'material-icons-react';

function Card({heading, desc}) {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className='card' onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}>
      <div className='card__content'>
      <MaterialIcon icon="dashboard" />
      <h1 className='card__heading'>{heading}</h1>
      {isHovering && <p>{desc}</p>}
      </div>
    </div>
  )
}

export default Card