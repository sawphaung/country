import React from 'react';

function CardDetails({ flag, name, population, region, capital }) {
  return (
    <div className='card'>
      <img className='flag' src={flag} alt='' />
      <div className='content'>
        <p className='country-name'>{name}</p>
        <div>
          Population: <span> {population}</span>
        </div>
        <div>
          Region:<span> {region}</span>
        </div>
        <div>
          Capital: <span> {capital}</span>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
