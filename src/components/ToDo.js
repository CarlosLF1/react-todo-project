import ListItems from './ListItems'
import AddNewText from './AddNewText';
import AddButton from './add';
import {useState, useEffect} from 'react'


export default function ToDo({toDoData}){
     
    let [content, setContent] = useState([])

    let [textContent, setTextContent] = useState('')
    
    useEffect(() => {

        const storedTodos = JSON.parse(localStorage.getItem('LS'))

        setContent([...storedTodos])
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
            <AddNewText cb={setTextContent} value={textContent} />
            <AddButton cb={handleNewTaskClick} />
          </div>
         <ListItems listArray = {content} handleDelete={handleDelete} handleEdit={handleEdit} handleDone={handleDone}/>
    </div>   
}