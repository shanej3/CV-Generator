import { useState } from "react";
import { InputComponent } from "./InputComponent"

export function GeneralInfo() {
    const [formData, setFormData] = useState({ name : '', email: '', phone: '', address: ''})
    const handleChange = (e) => {
        const {id, value } = e.target;
        setFormData({...formData, [id]: value})
    }
    return (
        <>
        <form className="general-info-form">
            <div className="header-section-text" id="general-info">
            <h2>General Info</h2>
            <InputComponent id="name" type="text" display_name="Name" value={formData.name} onChange={handleChange}/>
            <InputComponent id="email" type="email" display_name="Email" value={formData.email} onChange={handleChange}/>
            <InputComponent id="phone" type="text" display_name="Phone #" value={formData.phone} onChange={handleChange}/>
            <InputComponent id="address" type="text" display_name="Address" value={formData.address} onChange={handleChange}/>
            <button className="button">Submit</button>
            <p>name : {formData.name}</p>

        </div>
        
        </form>
        
        </>
        
        
    )
}