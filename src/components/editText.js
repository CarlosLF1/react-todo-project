export default function EditText({ item, onChange }) {

    return (
        <input className={item.done ? "strike-through" : 'normal-task'} type="text" value={item.text} onChange={onChange}/>
    )
}