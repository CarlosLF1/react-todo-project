import DoneRadio from "./DoneRadio";
import EditText from "./editText";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

export default function ListItem ({item, listArray, handleDone}) {



    return (
        <li key={item.id} className="Item-list">
            
            <DoneRadio item={item} listArray={listArray} handleDone={handleDone} />
            <EditText item={item} />
            <EditButton />
            <DeleteButton />

        </li>
    )
}