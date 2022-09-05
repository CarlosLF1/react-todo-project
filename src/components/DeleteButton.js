

//let ToDoDta should be state with const
const [toDoData, setToDoData] = useState([{ id: 1, text: 'textData', done: true},{id: 2, text: 'textData2', done: false}])
//this function needs to be in app.js:
const handleDeleteTask = (id) =>{
       
    const newToDoData = toDoData.filter((eachToDo) =>{ eachToDo.id !== id

   })
  setToDoData(newToDoData)
}
//in the ListItem.js:
<DeleteButton id={key}/>

//this can be the repalcment to the function handleNewTaskClick (line 24) in ToDo.js if we make the ToDoData as a state.
setToDoData((prev) => {[ ...prev, {id: toDoData[toDoData.length-1], ...newData } ]})
setToDoData(newData)

//this sateyd here:
export default function DeleteButton({id}) {    
    
    return (
        <button onClick={()=>handleDeleteTask(id)} >Delete</button>
    )
}

