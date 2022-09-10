
import ListItem from "./ListItem"
export default function ListItems({listArray, handleEdit, handleDone, handleDeleteTask}) {



    return (
        <div>
            <ul>
                {
                    listArray.map((item) => <ListItem key={item.id} idx= {item.id} item={item} onChange={handleEdit} handleDone={handleDone} handleDeleteTask={handleDeleteTask}/>)
                }
                               
            </ul>
        </div>
    )
}