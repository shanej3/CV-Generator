export function InputComponent({id, type, display_name}) {
    return (
        <div className="input-component">
            <label htmlFor={id}>{display_name}</label>
            <input className="input-class" id={id} type={type}/>
        </div>
    )
}