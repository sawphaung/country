import React from 'react';

class CountryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
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
        {languages.name}
      </div>
    ));

    const borders = this.props.location.borders.map(border => (
      <div className='border-lists' key={border}>
        {border}
      </div>
    ));

    return (
      <div>
        <button className='button' onClick={this.goBack}>
          Back to Home
        </button>
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
              Population: <span>{location.population}</span>
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
              Border Countries: <span>{borders}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryDetail;
