export function InputComponent({id, type, display_name}) {
    return (
        <div className="input-component" id={id}>
            <div className="input-display-name">{display_name}</div>
            <input className="input-class" type={type}/>
        </div>
    )
}