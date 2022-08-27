import { useState } from "react";
export default function AddTask(props){

    let [userInput, setUserInput] = useState('');

    const handelInputChange = (e) => {
        setUserInput(e.target.value)
    }

    return <div>
        <input
        type="text" 
        placeholder="Type in new task" 
        onChange={handelInputChange} />
        <button onClick={props.handelAddTask}>Add new task</button>
    </div>
}