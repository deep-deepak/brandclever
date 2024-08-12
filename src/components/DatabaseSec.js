import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class DatabaseSec extends Component {
  render() {
    const dbImages = [
      process.env.PUBLIC_URL + '/images/db/aws-partner.svg',
      process.env.PUBLIC_URL + '/images/db/mongodb-partner.svg',
      process.env.PUBLIC_URL + '/images/db/google-cloud-partner.svg',
      process.env.PUBLIC_URL + '/images/db/cloudinary-partner.svg',
    ];

    return (
      <Container>
        <div className='main-sub'>
          <div className='database_left'>
            <h2 className='cont2'>Our Subject Matter Experts Are Change Catalysts. Book Your First Presentation with Our <Link to="https://brandclever.in/manishverma/" style={{textDecoration:"none",fontWeight:"700"}} target="_blank">Manish verma upwork </Link> Today.</h2>
          </div>
          <div className='database_right'>
            {dbImages.map((image, index) => (
              <div className="databaseIcon Subject-M" key={index}>
                <img src={image} alt={`Column ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

      </Container>

    )
  }
}


