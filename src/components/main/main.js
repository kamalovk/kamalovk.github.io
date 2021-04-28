import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card, Container, Row, Col} from 'react-bootstrap'
import { defaultState, getPhotos } from '../../redux/reducers/photos';
import {getPhotos as getPhotosAction} from '../../redux/reducers/photos'
import { connect } from 'react-redux';


function Main({photos, getPhotos}){
  useEffect(()=>{
    getPhotos()
    console.log(photos.photos.slice(1,20))
  }, [])
  
  
  return(
    <div>
      <div>
        
        <Container className='container-block'>
          <Row>
          {
            photos.photos.slice(1,20).map((photo) => (
                  <Col>
                    <Card style={{ width: '18rem' }} key={photo.id} className='card-block'>
                      <Card.Img variant="top" src={photo.url} />
                      <Card.Body>
                        <Card.Text>
                          {photo.title}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
            ))
          }
          </Row>
          
          
        </Container>
      </div>
      <style type="text/css">
        {`
        .container-block{
          display: flex;
          justify-content: center;
        }
        .card-block {
          
          margin: 20px
        }
        `}
      </style>
    </div>
  )
}
export default connect(
  ({photos}) => ({photos}),
  {
    getPhotos: getPhotosAction 
  }
)(Main)