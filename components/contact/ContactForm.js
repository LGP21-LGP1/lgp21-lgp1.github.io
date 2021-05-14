import React, { useCallback, useState } from 'react';
import FormInput from './FormInput'
import FormTextArea from './FormTextArea'
import style from './form.module.css'

export const ContactForm = ({ submit }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const name_tip = "Eg. João Pombo"
    const email_tip = "Eg. general@vortex-tech.pt"
    const message_tip = "Your message"

    const handleSend = useCallback(() => {
        submit(name, email, message)
    }, [name, email, message])
    const updateName = useCallback((e) => {
        setName(e.target.value)
    }, [])
    const updateEmail = useCallback((e) => {
        setEmail(e.target.value)
    }, [])
    const updateMessage = useCallback((e) => {
        setMessage(e.target.value)
    }, [])
    return (
        <div className={style.formDiv}>
            {/* <div className={style.textInputRow}> */}
            <FormInput label="Name" placeholder={name_tip} type="text" onChange={updateName}></FormInput>
            <FormInput label="Email" placeholder={email_tip} type="email" onChange={updateEmail}></FormInput>
            {/* </div> */}
            <FormTextArea label="Message" placeholder={message_tip} onChange={updateMessage}></FormTextArea>
            <button className={style.sendButton} onClick={handleSend}>Send</button>
        </div>
    );
};

export default ContactForm;