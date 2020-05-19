import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Header from "./components/Header";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Region from "./components/Region";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CardDetails from "./components/CardDetails";

function App() {
  const [data, setData] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [region, setRegion] = useState("");

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  useEffect(() => {
    const loadData = async () => {
      const result = await axios("https://restcountries.eu/rest/v2/all");
      setData(result.data);
    };

    loadData();
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const onHandleChange = (event) => {
    setRegion(event.target.value);
  };

  const filterCountries = data.filter((country) => {
    return country.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            render={(props) => (
              <div>
                <div className="form">
                  <SearchBox searchChange={onSearchChange} />
                  <Region handleChange={onHandleChange} />
                </div>
                <CardList data={filterCountries} region={region} />
              </div>
            )}
          />

          <Route
            path={process.env.PUBLIC_URL + "/:id"}
            render={(props) => <CardDetails country={data} {...props} />}
          />
        </Switch>
      </div>

      <div
        className="scrollTop"
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? "flex" : "none" }}
      ></div>

      <footer>
        <p>
          Designed by
          <a
            href="https://www.sawphaung.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Saw Phaung
          </a>
        </p>
      </footer>
    </Router>
  );
}

export default App;
