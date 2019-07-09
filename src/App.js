import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Region from './components/Region';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CardDetails from './components/CardDetails';

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
    this.setState({ region: event.target.value });
  };

  render() {
    const { data, searchfield, region } = this.state;

    const filterCountries = data.filter(country => {
      return country.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (
      <Router>
        <div>
          <Header />

          <div className='container'>
            <Switch>
              <Route
                exact
                path={process.env.PUBLIC_URL + '/'}
                render={props => (
                  <div>
                    <div className='form'>
                      <SearchBox searchChange={this.onSearchChange} />
                      <Region handleChange={this.onHandleChange} />
                    </div>
                    <CardList data={filterCountries} region={region} />
                  </div>
                )}
              />

              <Route
                path={process.env.PUBLIC_URL + '/:id'}
                render={props => (
                  <CardDetails
                    country={data}
                    history={this.props.history}
                    {...props}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
