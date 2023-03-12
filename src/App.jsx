import './header.scss'
import { getUserTime } from './data'
import React, { useState } from 'react';
function App() {
  let [array, starray] = useState([
    { id: 1, name: "kitob oqish", date: getUserTime(Date.now()) },
    { id: 2, name: "yugursih", date: getUserTime(Date.now()) },
  ])

  const [name, setTitle] = useState("");
  const [date, setDate] = useState("");

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
    setTitle("");

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
              onChange={(e) => setTitle(e.target.value)} />
            <button className='btn'>submit</button>
            <input type="datetime-local"
              onChange={(e) => setDate(getUserTime(e.target.value))} />
          </form>
          <ul className='header__inner'>
            {array.map((arr) => (
              <li key={arr.id} className='header__item'>
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
