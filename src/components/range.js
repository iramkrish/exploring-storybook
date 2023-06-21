import '../range.css';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Custom Range slider component where User can change the slider at the bottom and
 * number inside the circle and the circular bar around the circle will
 * change.
 **/
export default function Range({ min, max }) {
  const circleParameter = 440; // 2 * PI * r
  const step = circleParameter / (max - min);
  const [range, setRange] = useState(min);
  const [svgOffset, setsvgOffset] = useState(circleParameter);

  useEffect(() => {
    setsvgOffset(circleParameter);
  }, []);

  const changeRange = (event) => {
    setRange(event.target.value);
    if (event.target.value === max) {
      setsvgOffset(0);
      return;
    } else if (event.target.value === min) {
      setsvgOffset(circleParameter);
      return;
    }
    setsvgOffset(circleParameter - (event.target.value - min) * step);
  };
  if (max - min <= 0) {
    return <p>minimum range value should always be lesser than maxmium value</p>;
  }

  return (
    <div className='container'>
      <div className='container2'>
        <div className='range-container'>
          <div className='range-value-view'>{range}</div>
          <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='160px' height='160px'>
            <circle
              cx='80'
              cy='80'
              r='70'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeDashoffset={svgOffset}
            />
          </svg>
        </div>
      </div>
      <div className='slidecontainer'>
        <input
          onChange={changeRange}
          type='range'
          min={min}
          max={max}
          value={range}
          className='slider'
          aria-label='range'
        />
      </div>
    </div>
  );
}

Range.propTypes = {
  /** min represents the minimum value of the range */
  min: PropTypes.string.isRequired,
  /** max represents the maximum value of the range  */
  max: PropTypes.string.isRequired,
};
