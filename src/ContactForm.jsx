import React, { useState } from 'react';


const ContactForm = ({ contacts, setContacts }) => {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const newContact = {
            id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1,
            title,
            date
        };
        if (title !== "" && date !== "") {
            setContacts([...contacts, newContact]);
        } else {
            alert('Iltimos kunlik tartibingizni yozing')
        }
        
        setTitle('')
        setDate('')
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="plan__form"
                id="form"
            >
                <input className='header__input' type="text"
                    onChange={(evt) => setTitle(evt.target.value)}
                />
                <input className='input__data' type="datetime-local"
                    onChange={(evt) => setDate(evt.target.value)}
                />
                <button className='btn' type='submit'>submit</button>
            </form>
        </>
    )
}


export default ContactForm;