import './header.scss'
import { getUserTime } from './data'
import React, { useState } from 'react';
function App() {
  let [array, starray] = useState([
    
  ])

  const [name, seTitle] = useState("");
  const [date, seDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || date === "") {
      return alert("Iltimos, maʻlumotlarni kiriting");
    }

    if (!name) return;
    const newData = {
      id: Date.now(),
      name,
      date,
    };

    starray([...array, newData]);
    seTitle("");

    alert(`${name} muvaffaqiyatli qoʻshildi`);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <form
            action=""
            onSubmit={handleSubmit}
            className="plan__form"
            id="form"
          >
            <input className='header__input' type="text"
              onChange={(evt) => seTitle(evt.target.value)} />
            <input className='input__data' type="datetime-local"
              onChange={(evt) => seDate(getUserTime(evt.target.value))} />
            <button className='btn'>submit</button>
          </form>
          <ul className='header__inner'>
            {array.map((arr) => (
              <li data-id={arr.id} key={arr.id} className='header__item'>
                <div>
                  <h2>{arr.name}</h2>
                  <p>{arr.date}</p>
                </div>
                <div>
                  <button className='header__edit'>Edit</button>
                  <button className='header__delit'>Delit</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}

export default App;
