import React from 'react';
import { Link } from 'react-router-dom';

function Card({ country }) {
  return (
    <div className='card'>
      <Link
        to={{
          pathname: `${country.alpha3Code}`,
          name: country.name,
          population: country.population,
          region: country.region,
          capital: country.capital
        }}
      >
        <img className='flag' src={country.flag} alt='' />
        <div className='content'>
          <p className='country-name'>{country.name}</p>
          <div>
            Population: <span> {country.population}</span>
          </div>
          <div>
            Region:<span> {country.region}</span>
          </div>
          <div>
            Capital: <span> {country.capital}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
