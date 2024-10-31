import React, { useState } from "react"
import { elements } from "./_data"

function Element({num}) {
  let element = elements[num];
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div 
      className={`element element-${num} ${element.category}`}
      onMouseEnter = {() => setIsHovering(true)}
      onMouseLeave = {() => setIsHovering(false)}  
    >
      <div className="number">{element.number}</div>
      <div className="symbol">{element.symbol}</div>
      <div className="element-name">{element.name}</div>
      {isHovering && <div>Hovering!</div>}
    </div>
  )
}

export default Element;