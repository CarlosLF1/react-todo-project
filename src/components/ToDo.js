import ListItems from './ListItems'
import AddNewText from './AddNewText';
import AddButton from './add';
import {useState} from 'react'
export default function ToDo({toDoData}){

    let textContent = '';
    let [content, setContent] = useState(toDoData)
    function handleTextState(newTask){
        textContent = newTask
    }
  
    function handleNewTaskClick(){
        console.log('Log 1' + textContent)
        toDoData.push({id: toDoData[toDoData.length-1].id+1, text: textContent, done: false})
        
        setContent({toDoData})
        console.log(toDoData);
    }

    return <div className="addNew">
        <div className="App">
            <AddNewText cb={handleTextState} />
            <AddButton cb={handleNewTaskClick} />
          </div>
        <ListItems listArray = {toDoData} />
    </div>   
}