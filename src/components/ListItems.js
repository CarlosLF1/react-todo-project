
import ListItem from "./ListItem"
export default function ListItems({listArray, handleDone}) {



    return (
        <div>
            <ul>
                {
                    listArray.map((item, idx) => <ListItem item={item} listArray={listArray} handleDone={handleDone} />)
                }
                               
            </ul>
        </div>
    )
}