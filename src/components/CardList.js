import React from 'react';
import Card from './Card';

const CardList = ({ data, region }) => {
  if (region !== '') {
    const filterRegion = data.filter(name => {
      return region === name.region;
    });

    const renderedList = filterRegion.map((country, i) => {
      return (
        <Card
          key={i}
          flag={filterRegion[i].flag}
          name={filterRegion[i].name}
          population={filterRegion[i].population}
          region={filterRegion[i].region}
          capital={filterRegion[i].capital}
        />
      );
    });

    return <div className='countries'>{renderedList}</div>;
  } else {
    const renderedList = data.map((country, i) => {
      return (
        <Card
          key={i}
          flag={data[i].flag}
          name={data[i].name}
          population={data[i].population}
          region={data[i].region}
          capital={data[i].capital}
        />
      );
    });

    return <div className='countries'>{renderedList}</div>;
  }
};

export default CardList;
