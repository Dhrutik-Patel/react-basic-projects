import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setText(data.slice(0, +count));
  };

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs: </label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(ev) => setCount(ev.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>

      <article className='lorem-text'>
        {text.map((t, index) => {
          return <p key={index}>{t}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
