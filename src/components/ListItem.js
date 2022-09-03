import DoneRadio from "./DoneRadio";
import EditText from "./editText";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

export default function ListItem ({key, item}) {



    return (
        <li id={key} className="Item-list">
            
            <DoneRadio item={item} />
            <EditText item={item} />
            <EditButton />
            <DeleteButton />

        </li>
    )
}