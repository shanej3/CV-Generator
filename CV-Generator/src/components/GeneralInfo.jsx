import { InputComponent } from "./InputComponent"

export function GeneralInfo() {
    return (
        <div id="general-info">
            <h2>General Info</h2>
            <InputComponent id="name-input" type="text" display_name="Name"/>
            <InputComponent id="email-input" type="email" display_name="Email"/>
            <InputComponent id="phone-input" type="text" display_name="Phone #"/>
            <InputComponent id="address-input" type="text" display_name="Address"/>
        </div>
    )
}