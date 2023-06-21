import '../select.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Custom select component where Users can select any bar on the scale.
 * When a bar is selected, its value is displayed above the scale, and the color of the selected bar is updated.
 * Furthermore, if there are any bars positioned below the selected bar, their colors are also updated to
 * the color of selected bar accordingly.
 *
 * clippath css approach : https://codesandbox.io/s/select-range-clippath-svg-approach-ps7h6y
 *
 * precpective css approach : https://codesandbox.io/s/select-range-prespective-approach-m78kvz
 **/

export default function Select({ options }) {
  const [select, setSelect] = useState(options[options.length - 1]);
  const updateSelector = (element) => {
    setSelect(element);
  };

  if (Array.isArray(options) && options.length === 0) {
    return <p>options prop should be an array with at least one element</p>;
  }

  return (
    <div className='select-container'>
      <div>
        <p className='selected-value'>{select.value}</p>
      </div>
      <div className='styled-select' role='group'>
        {options.map((element) => (
          <div className='bar-container' key={element.value}>
            <div
              className={`bar ${
                parseInt(element.html, 10) <= parseInt(select.html, 10) ? 'white' : ''
              }
            `}
              // style={{ width: (element.html - 1) * sizelimit + "px" }}
              onClick={() => updateSelector(element)}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /** value represents option value of select */
      value: PropTypes.string.isRequired,
      /** html represents option's innerHTML of select*/
      html: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
