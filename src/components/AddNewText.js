import {useState} from 'react'
export default function AddNewText({cb, value}) {

    const [newTaskState, setNewTaskState] = useState('')    

    const handleOnChange = (e) => {
        cb(e.target.value)
        // setNewTaskState(e.target.value)

    }
    return (
        <div>
            <input type="text" value={value} placeholder='Please type your task' onChange={handleOnChange}/>
        </div>
    )
}