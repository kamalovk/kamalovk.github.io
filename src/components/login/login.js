import React, {useState, useEffect, useContext} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";
import UserContext from '../context/userContext'
export default function Login(){
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const {isAuth, setIsAuth} = useContext(UserContext)
  const [error, setError] = useState('');
  const [noted, setNoted] = useState('')
  let history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    
    if(name == 'Admin' && password == '12345'){
      setIsAuth(true)
      setError('')
      history.push('/profile')
      setNoted('Вы уже вошли')
    }
    else{
      setIsAuth(false)
      setError('Пароль или логин не верный')
      setNoted('')
    }
  }
  const submitQuit = () => {
    
    
    if(isAuth == true){
      setIsAuth(false)
      setNoted('Вы вышли')
    }
    else{
      setIsAuth(false)
      setNoted('Вы уже вышли')
    }
  }
  
  return(
    <>
      <Form onSubmit={submitHandler} className='form-block'>
        <Form.Group>
          
          <Form.Label className='error-label'>{error}</Form.Label><br></br>
          <Form.Label>{noted}</Form.Label><br></br>
          <Form.Label>Name</Form.Label> 
          
          <Form.Control placeholder="Name" onChange={(e) => setName(e.target.value)}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => submitHandler}>
          Submit
        </Button>
        <Button variant="primary" type="submit" onClick={submitQuit}>
          Выйти
        </Button>
      </Form>
      <style type="text/css">
        {`
        .error-label{
          color: red;
        }
        .form-block{
          margin-left: 20px;
          margin-right: 20px;
        }
        .form-block > button{
          margin-right: 20px
        }
        `}
      </style>
    </>
  )
}