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
          capital: country.capital,
          flag: country.flag,
          subregion: country.subregion,
          nativeName: country.nativeName,
          topLevelDomain: country.topLevelDomain,
          currencies: country.currencies,
          languages: country.languages,
          borders: country.borders
        }}
      >
        <img className='flag' src={country.flag} alt='' />

        <div className='content'>
          <h1 className='country-name'>{country.name}</h1>
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
