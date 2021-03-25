import React from 'react';
import style from './form.module.css'

export const FormInput = ({label, placeholder, type ,onChange}) => {
  return (
    <div className={style.inputLabelDiv + " " + style.textInputLabelDiv}>
        <label className={style.label} htmlFor={label}>{label}</label>
        <input id={label} className={style.textInput} type={type} name="name" placeholder={placeholder}
        onChange={onChange}/>
    </div>
  );
};

export default FormInput;