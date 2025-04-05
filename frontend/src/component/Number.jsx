import React, { useEffect, useContext } from 'react';
import { NumberContext } from './NumberContext';
import './Number.css';

function App() {
  const { number, setNumber } = useContext(NumberContext); // Access the shared state and updater function

  useEffect(() => {
    fetch('http://localhost:3001/get-number')
      .then((response) => response.json())
      .then((data) => {
        setNumber(data.number); // Use the correct property name
        console.log(data.number);
      })
      .catch((err) => {
        console.error('Error fetching the number:', err);
        alert('Failed to fetch the number from the server.');
      });
  }, []);

  return (
    <div className='warpper'>
      <div className='box'> 
        <p>{number}</p>
      </div>
    </div>
  );
}

export default App;