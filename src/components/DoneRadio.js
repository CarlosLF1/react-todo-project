import ListItem from "./ListItem";

export default function DoneRadio({ handleDone, item, listArray}) {

    const handleClick = (e) => {
        listArray[item.id] = !item.done;
        handleDone()
        alert(item.id)
        }
        return (
            <div>
                <input className={item.done ? "complete-button" : 'empty-button'} type="radio" onClick={handleClick} />
            </div>
        )
    };