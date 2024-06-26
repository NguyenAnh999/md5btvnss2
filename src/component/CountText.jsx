import React, { useState } from 'react'

export default function CountText() {
    const [textLength,setTextLeng] = useState(0)
    const handleCount = (e)=>{
        setTextLeng(e.target.value)
    }
  return (
    <div>
         <input type="text" onChange={handleCount} />
         <h5>count text:{textLength.length}</h5>
    </div>
  )
}
