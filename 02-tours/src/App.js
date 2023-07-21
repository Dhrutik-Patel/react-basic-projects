import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const URL = 'https://course-api.com/react-tours-project';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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
      <main>
        <Loading />
      </main>
    );
  }

  return <Tours tours={data} setData={setData} />;
};

export default App;
