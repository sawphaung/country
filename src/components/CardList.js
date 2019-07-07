import React from 'react';
import Card from './Card';

const CardList = ({ data, region }) => {
  if (region !== '') {
    var filteredList = data.filter(country => {
      return region === country.region;
    });

    const renderedList = filteredList.map((country, i) => {
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
