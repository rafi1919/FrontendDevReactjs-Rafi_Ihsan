import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import CardResto from './CardResto';
import Hero from './Hero'

class Main extends Component {
  state = {
    menuData: [],
    loading: true,
    error: null,
    orderByPrice: false,
    orderByRating: false,
    orderByOpen: false,
  };

  componentDidMount() {
    axios
      .get('https://raw.githubusercontent.com/igdev116/free-food-menus-api/main/menus/porks.json')
      .then((response) => {
        
        this.setState({
          menuData: response.data,
          loading: false,
        });
      })
      .catch((error) => {
       
        this.setState({
          error: error,
          loading: false,
        });
      });
  }

  
  toggleOrderByPrice = () => {
    this.setState((prevState) => ({
      orderByPrice: !prevState.orderByPrice,
      orderByRating: false, 
    }));
  };

  
  toggleOrderByRating = () => {
    this.setState((prevState) => ({
      orderByRating: !prevState.orderByRating,
      orderByPrice: false, 
    }));
  };

  toggleOrderByOpen = () => {
    this.setState((prevState) => ({
      orderByOpen: !prevState.orderByOpen,
      orderByOpen: false, 
    }));
  };

  render() {
    const { menuData, loading, error, orderByPrice, orderByOpen, orderByRating } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    const sortedMenuData = [...menuData].sort((a, b) => {
      if (orderByPrice) {
        return a.price - b.price;
      } else if (orderByRating) {
        return b.rate - a.rate;
      } else {
        return 0; 
      }
    });

    return (
      <div className="Main">
        <Hero />
        <h1>Restaurant List</h1>

        
        <div className="btn-group" role="group" style={{ color: 'black' }}>
            <Form.Check
              type="checkbox"
              label="Order by Price"
              checked={orderByPrice}
              onChange={this.toggleOrderByPrice}
              style={{ padding: '10px', marginLeft: '10px', textAlign: 'left', fontSize: '1rem' }}
            />
            <Form.Check
              type="checkbox"
              label="Order by Rating"
              checked={orderByRating}
              onChange={this.toggleOrderByRating}
              style={{ padding: '10px', textAlign: 'left', fontSize: '1rem' }}
            />
            <Form.Check
              type="checkbox"
              label="Order by Open"
              onChange={this.toggleOrderOpen}
              style={{ padding: '10px', textAlign: 'left', fontSize: '1rem' }}
            />
            <select className="form-select" aria-label="Default select example" style={{ width: '100px', fontSize: '1rem' }}>
              <option defaultValue>Categories</option>
              <option value="1">Beef</option>
              <option value="2">Steak</option>
              <option value="3">Chicken</option>
            </select>
          </div>

        <Container>
          <Row>
            {sortedMenuData.map((item, index) => (
                <Col xs={12} sm={6} md={4} lg={3} key={index}>
                <CardResto item={item} index={index} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
