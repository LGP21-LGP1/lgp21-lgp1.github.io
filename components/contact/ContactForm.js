import React, { useCallback, useState } from 'react';
import FormInput from './FormInput'
import FormTextArea from './FormTextArea'
import style from './form.module.css'

export const ContactForm = ({ submit }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const name_tip = "Ex. João Pombo"
    const email_tip = "Ex. exemplo@vortex.pt"
    const message_tip = "A sua mensagem"

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
            <div className={style.textInputRow}>
                <FormInput label="Nome" placeholder={name_tip} type="text" onChange={updateName}></FormInput>
                <FormInput label="Email" placeholder={email_tip} type="email" onChange={updateEmail}></FormInput>
            </div>
            <FormTextArea label="Mensagem" placeholder={message_tip} onChange={updateMessage}></FormTextArea>
            <button className={style.sendButton} onClick={handleSend}>Enviar</button>
        </div>
        //onChange={handleChange}
    );
};

export default ContactForm;