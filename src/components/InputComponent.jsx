export default function InputComponent({nameOfClass, labelTxt, inputType, placeholder, inputId, value, onChange}) {
    return (
        <label className={nameOfClass + '__label'} htmlFor={inputId}>
            {labelTxt}:
            <input type={inputType} placeholder={placeholder} id={inputId}
                   className={nameOfClass + '__label__input'}
                   onChange={onChange}
                   defaultValue={value}
            />
        </label>
    );
}