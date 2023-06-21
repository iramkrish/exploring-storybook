import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Range from '../components/range';

it('Information is displayed when the range component has min set to be equal or more then max', () => {
  render(<Range min='30' max='20' />);
  const info = screen.getByText(/minimum/i);
  expect(info).toBeInTheDocument();
});

it('When the range component is rendered, the text in the initial load should be the value of the min prop', () => {
  render(<Range min='3' max='20' />);
  const info = screen.getByText('3');
  expect(info).toBeInTheDocument();
});

it('Moving the range value should change the text inside the circle', () => {
  render(<Range min='3' max='20' />);
  const slider = screen.getByLabelText('range');
  fireEvent.change(slider, { target: { value: 10 } });
  const info = screen.getByText('10');
  expect(info).toBeInTheDocument();
});
