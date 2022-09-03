import ListItem from "./ListItem";

export default function DoneRadio(item) {

    return (
        <div>
            <input type="radio" checked={item.done} />
        </div>
    )
}