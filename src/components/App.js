import '../App.css';
import React from 'react';
import Select from './select';
import Range from './range';

export default function App() {
  return (
    <div className='App'>
      <p>Range</p>
      <Range min='0' max='10' />
      <p>Select</p>
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
      ></Select>
    </div>
  );
}
