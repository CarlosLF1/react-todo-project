import DoneRadio from "./DoneRadio";
import EditText from "./editText";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { useEffect, useState, useRef } from "react";

export default function ListItem ({item, onChange, handleDone, handleDeleteTask, idx}) {

    const [textMode, setTextMode] =useState(true) 
    const [itemText, setItemText] = useState(item.text);
    const [id, setId] = useState (item.id)
    const [item2, setItem] = useState(item);

    const ref = useRef(null);
    
    useEffect(()=>{
        console.log("textmode, oldtext, newtext",textMode, item.text, itemText)
        if ((textMode)&&(item.text!==itemText)) onChange(itemText, id)
        ref.current.focus()
    }, [textMode])

    
    
    function onEditClick(){
        setTextMode(!textMode);
    }

    function textChange(text) {
        console.log(text)
        setItemText(text)
    }

    console.log("id:", idx)
    return (
        <li className="Item-list">
            
            <DoneRadio item={item} handleDone={handleDone} />
            <EditText myref={ref} item={item2} cb={textChange} disabled= {textMode} />
            <EditButton cb={onEditClick}/>
            <DeleteButton item={item} handleDeleteTask={handleDeleteTask}/>

        </li>
    )
}