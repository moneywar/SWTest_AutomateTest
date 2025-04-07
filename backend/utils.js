// Function to add a number to the current number
export function addNumber(newNumber, curNumber) {
    curNumber += newNumber;
    return curNumber;
}

export function fetchData() {
    // This would normally fetch some data, but it's unfinished.
    throw new Error("fetchData is not implemented yet");
}

// Function that uses fetchData
export function calculateTotal() {
    const data = fetchData(); // Call fetchData directly instead of using 'this'
    return data.reduce((total, num) => total + num, 0); // Summing up data
}

module.exports = { addNumber, fetchData, calculateTotal };
