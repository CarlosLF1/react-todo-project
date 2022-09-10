import { useState } from "react"


//this sateyd here:
export default function DeleteButton({item, handleDeleteTask}) {    
    console.log("id:",item)
    return (
        <button onClick={()=>handleDeleteTask(item.id)} >Delete</button>
    )
}