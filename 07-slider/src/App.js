import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, [2000]);
    return () => clearInterval(slider);
  }, [index]);

  const handlePrev = () => {
    if (index === 0) {
      setIndex(people.length - 1);
      return;
    }
    setIndex(index - 1);
  };

  const handleNext = () => {
    if (index === people.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span> reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, title, name, quote } = person;

          let position = 'nextSlide';
          position = personIndex === index ? 'activeSlide' : position;
          position =
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
              ? 'lastSlide'
              : position;

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}

        <button className='prev' onClick={handlePrev}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={handleNext}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
