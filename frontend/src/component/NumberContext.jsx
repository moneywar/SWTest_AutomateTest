import React, { createContext, useState } from 'react';

export const NumberContext = createContext();

export const NumberProvider = ({ children }) => {
    const [number, setNumber] = useState(0); // Shared state for the number

    return (
        <NumberContext.Provider value={{ number, setNumber }}>
            {children}
        </NumberContext.Provider>
    );
};