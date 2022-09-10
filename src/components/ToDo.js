import ListItems from './ListItems'
import AddNewText from './AddNewText';
import AddButton from './add';
import {useState, useEffect} from 'react'
import { isDocument } from '@testing-library/user-event/dist/utils';


export default function ToDo(){
     
    let [content, setContent] = useState([])

    let [textContent, setTextContent] = useState('')

    
    useEffect(() => {

        const storedTodos = JSON.parse(localStorage.getItem('LS'))

        if (storedTodos) setContent([...storedTodos])
    }, [])

    useEffect(() => {
        // there will a problem when you want to delete all items but it can resolved later
        if (content.length) localStorage.setItem('LS', JSON.stringify(content))

    }, [content])
 
  
    function handleNewTaskClick(){

        const oldData = [...content]

        oldData.push({id: oldData.length +1, text: textContent, done: false})

        setContent([...oldData])

        localStorage.setItem('LS', JSON.stringify(content))
        
    }
console.log('useEffect1: content is', content) 
    

    const handleDeleteTask = (id) =>{
        const newToDoData = content.filter((eachToDo) => eachToDo.id !== id)
  
       setContent(newToDoData)
    }

  


    function handleEdit(txt,idx){
        console.log("edited text and id", txt, idx)
        const oldData = [...content]
        
        const find =(element)=>element.id===idx
 

        const i= oldData.findIndex(find)

        oldData[i].text=txt;

        setContent([...oldData])

        localStorage.setItem('LS', JSON.stringify(content))
    }
    function handleDone(id) {
        const doneArray = [...content]
        const doneIndex = doneArray.findIndex((element) => 
            element.id === id
        )
        doneArray[doneIndex].done = !doneArray[doneIndex].done;
        setContent(doneArray);
        // Can we add Local storage?
        localStorage.setItem('LS', JSON.stringify(content))
    }

    return <div className="addNew">
        <div className="App">
            <AddNewText cb={setTextContent} value={textContent} />
            <AddButton cb={handleNewTaskClick} />
          </div>
         <ListItems listArray = {content} handleDeleteTask={handleDeleteTask} handleEdit={handleEdit} handleDone={handleDone}/>
    </div>   
}