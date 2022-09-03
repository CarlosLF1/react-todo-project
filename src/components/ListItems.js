
import ListItem from "./ListItem"
export default function ListItems({listArray}) {



    return (
        <div>
            <ul>
                {
                    listArray.map((item, idx) => <ListItem key={idx} item={item}/>)
                }
                               
            </ul>
        </div>
    )
}