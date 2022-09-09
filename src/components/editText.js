export default function EditText({ item, cb, disabled, myref}) {
    function textChange(e){
        console.log("text value",  e.target.value)
        cb(e.target.value)
    }
    return (
        <input ref={myref} type="text" defaultValue={item} onChange={textChange} disabled={disabled}/>
    )
}