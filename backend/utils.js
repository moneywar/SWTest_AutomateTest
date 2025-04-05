// Function to add a number to the current number
function addNumber(newNumber, curNumber) {
    curNumber += newNumber;
    return curNumber;
}

function subtract(a, b) {
    // not done yet
    throw new Error("Not implemented");
}

function fetchData() {
    // This would normally fetch some data, but it's unfinished.
    throw new Error("fetchData is not implemented yet");
}

// Function that uses fetchData
function calculateTotal() {
    const data = this.fetchData(); // Calls the unfinished fetchData
    return data.reduce((total, num) => total + num, 0); // Summing up data
}

module.exports = { addNumber, subtract, fetchData, calculateTotal };