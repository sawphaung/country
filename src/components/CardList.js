import React from 'react';
import Card from './Card';

const CardList = ({ data, region }) => {
  if (region !== '') {
    const filterRegion = data.filter(country => {
      return country.region === region;
    });

    const renderedList = filterRegion.map(country => {
      return <Card key={country.name} country={country} />;
    });

    return <div className='countries'>{renderedList}</div>;
  } else {
    const renderedList = data.map(country => {
      return <Card key={country.name} country={country} />;
    });

    return <div className='countries'>{renderedList}</div>;
  }
};

export default CardList;
