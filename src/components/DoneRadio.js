import ListItem from "./ListItem";
import './Done.css'

export default function DoneRadio({ handleDone, item, listArray}) {

    const handleClick = (e) => {
        handleDone(item.id)
//        alert(item.id)
    }
    return (
            <div>
                <input className={item.done ? "complete-button" : 'empty-button'} type="radio" onClick={handleClick} checked={item.done} />
            </div>
    )
};