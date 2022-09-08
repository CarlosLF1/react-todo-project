export default function EditText({ item, onChange }) {

    return (
        <input type="text" value={item.text} onChange={onChange}/>
    )
}