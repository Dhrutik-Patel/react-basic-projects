import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const URL = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const fetchData = async function () {
      try {
        const response = await fetch(URL);
        const data = await response.json();

        setData(data);
        setLoading(false);
      } catch (err) {
        console.log('Failed to fetch data: ', err.message);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = data[value];

  return (
    <section className='section'>
      <div className='title'>
        <h2>expierence</h2>
        <div className='underline'></div>
      </div>

      <div className='jobs-center'>
        <div className='btn-container'>
          {data.map((item, index) => {
            return (
              <button
                key={index}
                className={index === value ? 'job-btn active-btn' : 'job-btn'}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon' />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
