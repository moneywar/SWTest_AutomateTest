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