import ListItems from './ListItems'
import AddNewText from './AddNewText';
import AddButton from './add';
import {useState, useEffect} from 'react'
export default function ToDo({toDoData}){

    let textContent = '';
    let [content, setContent] = useState(toDoData)

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('LS'))
        if (storedTodos) setContent(storedTodos)
      }, [])
    
      useEffect(() => {
        localStorage.setItem('LS', JSON.stringify(content))
      }, [content])


    function handleTextState(newTask){
        textContent = newTask
    }
  
    function handleNewTaskClick(){
        console.log('Log 1' + textContent)
        toDoData.push({id: toDoData[toDoData.length-1].id+1, text: textContent, done: false})
        setContent({toDoData})
    }

    function handleDelete(){
        setContent({toDoData})
    }
    function handleEdit(){
        setContent({toDoData})
    }
    function handleDone(){
        setContent({toDoData})
    }

    return <div className="addNew">
        <div className="App">
            <AddNewText cb={handleTextState} />
            <AddButton cb={handleNewTaskClick} />
          </div>
         <ListItems listArray = {toDoData} handleDelete={handleDelete} handleEdit={handleEdit} handleDone={handleDone}/>
        <ul>
{/*             {
                toDoData.map((item, idx, array) => <ListItem key={idx} item={item} toDoData = {array} handleDelete={handleDelete} handleEdit={handleEdit} handleDone={handleDone}/>)
            } */}
                               
        </ul>
    </div>   
}