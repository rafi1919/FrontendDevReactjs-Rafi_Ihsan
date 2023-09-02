import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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

const CardItem = ({ item, index, scrollToTop }) => {
  return (
    <Card className="restocard" style={{ marginBottom: '20px', textAlign: 'left' }}>
      <Card.Img variant="top" src={item.img} alt={item.name} className="object-fit" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <div>{generaterateStars(item.rate)}</div>
        <h6 className="text-right">${item.price} - ${item.price + 169}</h6>
        {/* <h6><i className="fa-solid fa-location-dot "></i> {item.country}</h6> */}
        <h6 className="text-success text-end ">Open Now</h6>
      </Card.Body>
      <Link to={`/card/${index}`} className="btn" onClick={scrollToTop} style={{ background: '#A30024', color: '#fff' }}>
        Detail
      </Link>
    </Card>
  );
};

export default CardItem;
