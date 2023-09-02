import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import CardResto from './CardResto';


class BottomCard extends Component {
  state = {
    menuData: [],
    loading: true,
    error: null,
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


  render() {
    const { menuData, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    
    return (
      <div className="Main">
        <h1>other options</h1>
        <br/>
        <Container>
          <Row>
            {menuData.map((item, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index}>
              <CardResto item={item} index={index} scrollToTop={scrollToTop} />
            </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default BottomCard;
