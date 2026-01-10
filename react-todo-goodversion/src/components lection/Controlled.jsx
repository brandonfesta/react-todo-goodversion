import { useState } from "react"
export default function Controlled(){
    const [inputValue, setInputValue] = useState("")
    const [error, setError] = useState("")
    function handleInput(event){
        setInputValue(event)
        event.length < 8 ? setError("min 8 caratteri") : setError("")
    }
    return(
        <div>
            <input type="text" onChange={(e) => handleInput(e.target.value)}/>
            <span>{error}</span>
            <p>{inputValue}</p>
        </div>
    )
}