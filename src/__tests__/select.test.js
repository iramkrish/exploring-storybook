import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Select from '../components/select';

it('The text in intial load before user chooses a new bar should be the value in last elemnt of array', () => {
  render(
    <Select
      options={[
        {
          value: 'very high',
          html: '5',
        },
        {
          value: 'high',
          html: '4',
        },
        {
          value: 'medium',
          html: '3',
        },
        {
          value: 'low',
          html: '2',
        },
        {
          value: 'very low',
          html: '1',
        },
      ]}
    />,
  );

  expect(screen.getByText('very low')).toBeInTheDocument();
  expect(screen.getByRole('group').children[4].firstChild).toHaveClass('white');
});

it('User selecting another bar should change the text to choosen bar`s value', async () => {
  render(
    <Select
      options={[
        {
          value: 'very high',
          html: '5',
        },
        {
          value: 'high',
          html: '4',
        },
        {
          value: 'medium',
          html: '3',
        },
        {
          value: 'low',
          html: '2',
        },
        {
          value: 'very low',
          html: '1',
        },
      ]}
    />,
  );
  const select = screen.getByRole('group');
  fireEvent.click(select.children[2].firstChild);
  const info = screen.getByText('medium');
  expect(info).toBeInTheDocument();
  expect(screen.getByRole('group').children[0].firstChild).not.toHaveClass('white');
  expect(screen.getByRole('group').children[1].firstChild).not.toHaveClass('white');
  expect(screen.getByRole('group').children[2].firstChild).toHaveClass('white');
  expect(screen.getByRole('group').children[3].firstChild).toHaveClass('white');
  expect(screen.getByRole('group').children[4].firstChild).toHaveClass('white');
});
