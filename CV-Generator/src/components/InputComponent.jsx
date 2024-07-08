export function InputComponent({id, type, display_name, value, onChange}) {
    return (
        <div className="input-component">
            <label htmlFor={id}>{display_name}</label>
            <input 
            className="input-class" 
            id={id} 
            type={type}
            value={value}
            onChange={onChange}/>
        </div>
    )
}