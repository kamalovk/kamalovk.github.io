import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import {getPosts as getPostsAction} from '../../redux/reducers/posts'
import { Container, Row, Col, Card } from 'react-bootstrap';
function Posts({posts, getPosts}){
  
  

  
  useEffect(()=>{
    getPosts()
  }, [])
  
  
  
  return(
    <div>
      <div>
        <Container mt='2'>
          <Row>

          
        
        {
           posts.posts.slice(1,20).map((item) => (
              
                <Card  key ={ item.id} border="success" style ={{margin: '20px'}}>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.body}
                    </Card.Text>
                  </Card.Body>
                </Card> 
              
              
            
            
          ))
        }
        </Row>
        </Container>
        
        
      </div>
      
    </div>
  )
  
}

export default connect(
  ({posts}) => ({ posts }),
  {
    getPosts: getPostsAction
  }
)(Posts)
