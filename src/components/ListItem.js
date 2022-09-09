import DoneRadio from "./DoneRadio";
import EditText from "./editText";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { useEffect, useState, useRef } from "react";

export default function ListItem ({item, onChange}) {

    const [textMode, setTextMode] =useState(true) 
    const [itemText, setItemText] = useState(item.text);
    const [id, setId] = useState (item.id)

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


    return (
        <li className="Item-list">
            
            <DoneRadio item={item} />
            <EditText myref={ref} item={itemText} cb={textChange} disabled= {textMode} />
            <EditButton cb={onEditClick}/>
            <DeleteButton />

        </li>
    )
}