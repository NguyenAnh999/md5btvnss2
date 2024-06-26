import React, { useState } from 'react'

export default function UseStateComponent() {
    const [count,setCount] = useState(1)
   const handleCount = ()=>{
    setCount(count+1)
   }
  return (
    <div>Count : {count}
    <button onClick={handleCount}>click</button>
    </div>
  )
}
