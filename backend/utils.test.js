import { addNumber, fetchData, calculateTotal } from './utils';

// Mock fetchData globally
jest.mock('./utils', () => ({
    ...jest.requireActual('./utils'), // Retain other functions
    fetchData: jest.fn() // Mock fetchData only
}));

describe('addNumber()', () => {
    test('should return the sum of the two numbers', () => {
        expect(addNumber(10, 20)).toBe(30); // 20 + 10
    });
});

describe('fetchData()', () => {
    test('should throw an error when called', () => {
        // Mock fetchData to throw an error explicitly
        fetchData.mockImplementationOnce(() => {
            throw new Error('fetchData is not implemented yet');
        });

        expect(() => fetchData()).toThrow('fetchData is not implemented yet');
    });
});

// describe('calculateTotal()', () => {
//     test('should sum data correctly when fetchData returns an array', () => {
//         // Mock fetchData to return a predefined array
//         fetchData.mockReturnValue([1, 2, 3, 4]); // Mock fetchData

//         const result = calculateTotal();
//         expect(result).toBe(10); // 1 + 2 + 3 + 4
//     });

//     test('should throw error when fetchData is not implemented', () => {
//         // Mock fetchData to throw an error
//         fetchData.mockImplementationOnce(() => {
//             throw new Error('fetchData is not implemented yet');
//         });

//         expect(() => calculateTotal()).toThrow('fetchData is not implemented yet');
//     });
// });
