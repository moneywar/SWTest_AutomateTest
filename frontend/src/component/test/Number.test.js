import { render } from '@testing-library/react';
import { NumberContext } from '../NumberContext';
import Number from '../Number';

const mockContextValue = {
  number: 5,
  setNumber: jest.fn(),
};

describe('Number component snapshot testing', () => {
  it('matches snapshot with mock context', () => {
    const { asFragment } = render(
      <NumberContext.Provider value={mockContextValue}>
        <Number />
      </NumberContext.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
