import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import {Container, Card, Button} from 'react-bootstrap'
import {getProfile as getProfileAction} from '../../redux/reducers/profile'
import { connect } from 'react-redux'

function Profile( {authorized, profile, getProfile}){
  
  let main_url = 'https://jsonplaceholder.typicode.com/users/1'
  
  
  
  useEffect(()=>{
    getProfile()
    
  }, [])
  if( authorized == false ){
    return <Redirect to='/login'/>
  }
  
   
     
  return(
    <>
      <Container className='profile-container'>
        
        
        <Card>
          <Card.Header>Profile <br></br>
            Name: {profile.profile.name} <br></br>
            Username: {profile.profile.username}
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Address: {profile.profile.address.street + " " + profile.profile.address.suite +" "+ profile.profile.address.city} <br></br>
              phone: {profile.profile.phone}
            </Card.Text>
          </Card.Body>
        </Card>

      </Container>
      <style type="text/css">
        {`
        .profile-container{
          font-size: 20px;
          margin-top:50px;
        }
        `}
      </style>
    </>
  )
}
export default connect(
  ({ profile }) => ({ profile }),
  {
    getProfile: getProfileAction
  }
)(Profile)
