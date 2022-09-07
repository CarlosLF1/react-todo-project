import DoneRadio from "./DoneRadio";
import EditText from "./editText";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

export default function ListItem ({item, onChange}) {



    return (
        <li className="Item-list">
            
            <DoneRadio item={item} />
            <EditText item={item} onChange={onChange} />
            <EditButton />
            <DeleteButton />

        </li>
    )
}