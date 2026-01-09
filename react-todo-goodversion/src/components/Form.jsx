import { useRef } from "react"

export default function Form({addTask}){
    const inputRef = useRef();
    function handleAddTask(){
        addTask(inputRef.current.value)
    }
    return (
        <div>
            <h2>Che cosa devi fare</h2>
            <input type="text" ref={inputRef}/>
            <button className="btn" onClick={handleAddTask}>Aggiungi</button>
        </div>
    )
}