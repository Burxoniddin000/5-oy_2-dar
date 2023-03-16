import './header.scss'
import ContactForm from './ContactForm';
import ContactCard from './ContactCard';


import React, { useState } from 'react';
function App() {
  const [contacts, setContacts] = useState([]);

  return (
    <>
      <header className="header">
        <div className="container">
          <ContactForm contacts={contacts} setContacts={setContacts} />
          <ul className='header__inner'>
            {contacts.map((arr, i) => (
              <ContactCard
                contacts={contacts}
                setContacts={setContacts}
                key={i}
                arr={arr}
              />
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}

export default App;
