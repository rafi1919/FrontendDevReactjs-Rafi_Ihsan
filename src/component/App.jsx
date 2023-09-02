import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import RestaurantDetail from './RestaurantDetail'; // You'll need to create this component

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const apiUrl = 'https://restaurant-api.dicoding.dev/list';

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setRestaurants(response.data.restaurants);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>Restaurant List</h1>
        <Container>
          <Switch>
            <Route exact path="/">
              <Row>
                {restaurants.map(restaurant => (
                  <RestaurantCard
                    key={restaurant.id}
                    restaurant={restaurant}
                  />
                ))}
              </Row>
            </Route>
            <Route path="/detail/:id">
              <RestaurantDetail />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
