import React, { useState } from 'react'

export default function SelectOptionComponent() {
    const [text,setText] = useState("hello")
    const handleChange = (e)=>{
        setText(e.target.value) 
    }
  return (
    <div>
        <h1>{text}</h1>
        <select onChange={handleChange}>
            <option value="hcm">hcm</option>
            <option value="hn">hn</option>
            <option value="hujrfdduf">hujrfdduf</option>
        </select>
    </div>
  )
}
