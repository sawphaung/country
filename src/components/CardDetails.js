import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const CountryDetail = () => {
  return (
    <div>
      <Fragment>
        <Link to='/' className='button'>
          Back To Home
        </Link>
      </Fragment>

      <div style={marginTop} className='content'>
        <div className='country-name'>Name: </div>
        <div>
          <strong>Population:</strong>
        </div>
        <div>
          <strong>Region:</strong>
        </div>

        <div>
          <strong>Capital:</strong>
        </div>
        <p>I don't know how to pass data. </p>
      </div>
    </div>
  );
};

const marginTop = {
  marginTop: '5rem'
};

export default CountryDetail;
