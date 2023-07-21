import React, { useState } from 'react';

const Tour = ({ tour, setData }) => {
  const [readMore, setReadMore] = useState(false);

  const handleRemoveTour = (id) => {
    setData((prev) => {
      const data = prev.filter((tour) => tour.id !== id);
      return data;
    });
  };

  return (
    <article className='single-tour'>
      <img src={tour.image} alt={tour.name} />
      <footer>
        <div className='tour-info'>
          <h4>{tour.name}</h4>
          <h4 className='tour-price'>{tour.price}</h4>
        </div>
        <p>{readMore ? tour.info : tour.info.substr(0, 200)}...</p>
        <button className='' onClick={() => setReadMore(!readMore)}>
          {readMore ? 'show less' : 'read more'}
        </button>
        <button
          className='delete-btn'
          onClick={() => {
            handleRemoveTour(tour.id);
          }}
        >
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
