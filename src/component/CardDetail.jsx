import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import BottomCard from './BottomCard'
import { Link } from 'react-router-dom';

function CardDetail() {
  const { id } = useParams(); 

  const [item, setItem] = useState(null);

  const generaterateStars = (rate) => {
    const maxStars = 5;
    const fullStars = Math.floor(rate);
    const halfStar = rate - fullStars >= 0.5;
    
    const starIcons = [];
    
    for (let i = 0; i < fullStars; i++) {
      starIcons.push(<i key={`full-star-${i}`} className="fas fa-star fa-2xs" style={{color:"#ffa600" }}></i>);
    }
    
    if (halfStar) {
      starIcons.push(<i key={`half-star`} className="fas fa-star-half fa-2xs" style={{color:"#ffa600" }}></i>);
    }
    
    const remainingStars = maxStars - starIcons.length;
    
    for (let i = 0; i < remainingStars; i++) {
      starIcons.push(<i key={`empty-star-${i}`} className="far fa-star fa-2xs" style={{color:"#ffa600" }}></i>);
    }
    
    return starIcons;
  };

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/igdev116/free-food-menus-api/main/menus/porks.json`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();

        const selecteditem = jsonData[id];

        if (!selecteditem) {
          throw new Error('item not found');
        }

        setItem(selecteditem);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  const generateGoogleMapsURL = (country) => {
    return `https://www.google.com/maps?q=${encodeURIComponent(country)}`;
  };

  return (
    <>
    <div className="CardDetail" style={{color:'black', padding:'10rem 0 15rem 0'}}>
      <Container>
        <Card  className="shadow rounded" style={{ padding:'8rem 2rem  8rem 2rem '}}>
        <Row>
        <Col md={6}>
        <h2 className="nametop">{item.name}</h2>
        <img src={item.img} alt={item.name} className="img-fluid" style={{ maxWidth: '100%' }} />

        </Col>
        <Col  md={6} style={{ marginBottom: '20px', textAlign:'left' }}>
        <h2 className="namebottom">{item.name}</h2>
        <div>{generaterateStars(item.rate)} stars</div>
        <h6>{item.dsc}</h6>
        <br/>
        <h4>Price: ${item.price} - $ {item.price + 169 }</h4>
        <div><i className="fa-solid fa-location-dot "></i>  {item.country}</div>
  
        <a href={generateGoogleMapsURL(item.country)} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#A30024', color: '#fff' }}>
                  Visit Map
        </a>
        </Col>
        </Row>
        </Card>
      </Container>
     
    </div>
    <BottomCard />
    </>
  );
}

export default CardDetail;
