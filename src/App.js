import React from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/Header';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Region from './components/Region';

class App extends React.Component {
  state = {
    data: [],
    searchfield: '',
    region: ''
  };

  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  onHandleChange = event => {
    this.setState({ region: event.target.value }, () => {
      console.log('region: ', this.state.region);
    });
  };

  render() {
    const { data, searchfield, region } = this.state;

    const filterCountries = data.filter(country => {
      return country.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (
      <div>
        <Header />

        <div className='container'>
          <div className='form'>
            <SearchBox searchChange={this.onSearchChange} />
            <Region handleChange={this.onHandleChange} />
          </div>

          <CardList data={filterCountries} region={region} />
        </div>
      </div>
    );
  }
}

export default App;
