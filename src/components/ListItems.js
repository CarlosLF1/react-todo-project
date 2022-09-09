
import ListItem from "./ListItem"

export default function ListItems({listArray, handleEdit, handleDone}) {



    return (
        <div>
            <ul>
                {

                    listArray.map((item, idx) => <ListItem key={idx} item={item} onChange={handleEdit} handleDone={handleDone} />)

                }
                
            </ul>
        </div>
    )
}