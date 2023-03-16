import React, { useState } from 'react';


const ContactCard = ({ arr, contacts, setContacts }) => {

    const deleteHandler = () => {

        const result = contacts.filter((element) => {
            if (element.id !== arr.id) {
                return true;
            }
        });

		setContacts(result);
    }
        return (
            <li key={arr.id} className='header__item'>
                <div>
                    <h2>{arr.title}</h2>
                    <p>{arr.date}</p>
                </div>
                <div>
                    <button className='header__edit'>Edit</button>
                    <button
                        onClick={deleteHandler}
                        className='header__delit'>Delit</button>
                </div>
            </li>
        )

}

export default ContactCard;