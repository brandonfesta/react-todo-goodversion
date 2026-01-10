import { useRef } from "react"

export default function Uncontrolled(){
    const inputData = useRef()
    function handleClick(){
        console.log(inputData.current.value)
    }
    return(
        <div>
            <input type="text" ref={inputData}/>
            <button onClick={() => handleClick()}>Leggi</button>
        </div>
    )
}