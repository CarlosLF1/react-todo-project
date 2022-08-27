import AddTask from "./AddTask"
import TaskList from "./TaskList"
export default function ToDo(props){

    function handelAddTask(){
        
    }
    return <div className="addNew">
        <AddTask onClick={props.handelAddTask} />
        <TaskList/>
    </div>   
}