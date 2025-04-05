import React, { useState, useContext } from 'react';
import { NumberContext } from './NumberContext';
import './Operation.css';

function Operation() {
    const [inputValue, setInputValue] = useState(0); // State to store the input value
    const { setNumber } = useContext(NumberContext); // Access the shared state

    // Function to handle the + button click
    const handleAddNumber = () => {
        fetch('http://localhost:3001/add-number', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ number: parseInt(inputValue) }), // Send the input value as JSON
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    alert(`Error: ${data.error}`);
                } else {
                    setNumber(data.result); // Update the shared state with the new result
                }
            })
            .catch((err) => {
                console.error('Error adding the number:', err);
                alert('Failed to add the number.');
            });
    };

    return (
        <div className='submit'>
            <input
                className='input'
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} // Update the input value state
                placeholder="Enter a number"
            />
            <div className='button-container'>
                <button className='btn' onClick={handleAddNumber}>+</button> {/* Call the API on button click */}
            </div>
        </div>
    );
}

export default Operation;