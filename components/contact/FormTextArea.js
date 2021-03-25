import React from 'react';
import style from './form.module.css'

export const FormTextArea = ({label, placeholder, onChange}) => {
    return (
        <div className={style.inputLabelDiv}>
            <label className={style.label} htmlFor={label}>{label}</label>
            <textarea id={label} className={style.textArea} placeholder={placeholder}name="" rows="4" cols="50" 
            onChange={onChange}>
            </textarea>
        </div>
    );
};

export default FormTextArea;