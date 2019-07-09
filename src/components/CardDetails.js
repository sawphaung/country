import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

class CountryDetail extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { location } = this.props;

    const currencyList = this.props.location.currencies.map(country => (
      <span className='currencies' key={country.name}>
        {country.name}
      </span>
    ));

    const languages = this.props.location.languages.map(languages => (
      <div className='languages' key={languages.name}>
        {languages.name} {languages.nativeName}
      </div>
    ));

    const borders = this.props.location.borders.map(border => (
      <div className='border-lists' key={border}>
        {border}
      </div>
    ));

    return (
      <div className='margin-top-20'>
        <Fragment>
          <Link to='/' className='button'>
            &larr; Back To Home
          </Link>
        </Fragment>
        {/* <button className='button' onClick={this.goBack}>
          Back to Home
        </button> */}
        <div className='country-container'>
          <img className='flag' src={location.flag} alt='' />

          <div className='content'>
            <h1 className='country-name'>
              <span>{location.name}</span>
            </h1>
            <div>
              Native Name: <span>{location.nativeName}</span>{' '}
            </div>
            <div>
              Population: <span>{location.population.toLocaleString()}</span>
            </div>
            <div>
              Region: <span>{location.region}</span>
            </div>
            <div>
              Sub Region: <span>{location.subregion}</span>
            </div>
            <div>
              Capital: <span>{location.capital}</span>
            </div>
            <div>
              Top Level Domain: <span>{location.topLevelDomain}</span>
            </div>
            <div>
              Currencies: <span>{currencyList} </span>
            </div>
            <div>
              Languages: <span>{languages} </span>
            </div>
            <div>
              {borders.length > 0 && (
                <p>
                  Border Countries:
                  {borders}
                </p>
              )}
              {borders.length === 0 && <span>No Border Countries</span>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryDetail;
