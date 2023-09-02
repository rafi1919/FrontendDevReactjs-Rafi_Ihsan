import React from 'react';
import { Container } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';


function hero() {
  return (
    <div className='hero' style={{color: '#fff', fontWeight:'700'}}>
        <Container> 
        <div className="position-relative overflow-hidden p-3 p-md-5 text-center" >
        <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 fw-normal">Resto-Friendo</h1>
        <p className="lead fw-normal">when you hungry but don't know where to go</p>
        <a className="btn btn-light" href="#">Coming soon</a>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        </Container>
    </div>
      
  );
}

export default hero;
