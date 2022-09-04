import {useState} from 'react'
export default function AddNewText({cb}) {

    //const [newTaskState, setNewTaskState] = useState('')    

    const handleOnChange = (e) => {
        cb(e)
        //setNewTaskState(e.target.value)
    }
    return (
        <div>
            <input type="text" placeholder='Please type your task' onChange={handleOnChange}/>
        </div>
    )
}