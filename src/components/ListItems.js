
import ListItem from "./ListItem"
export default function ListItems({listArray, handleEdit}) {



    return (
        <div>
            <ul>
                {
                    listArray.map((item, idx) => <ListItem key={idx} item={item} onChange={handleEdit}/>)
                }
                               
            </ul>
        </div>
    )
}