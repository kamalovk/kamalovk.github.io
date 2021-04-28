import React, {useState} from 'react';

import Posts from '../posts/posts'

import Header from '../header/header'
import Main from '../main/main'
import Login from '../login/login'
import Profile from '../profile/profile'
import {BrowserRouter as Router, Redirect, Route, Switch}  from 'react-router-dom';
import UserContext from '../context/userContext'
function App(){

  const [isAuth, setIsAuth] = useState(false) 

  return(
    <>
      <div>
      
        <Router>
          
            <Header />
            <Route path='/' component={Main} exact={true}/>
            <Route path='/posts' component={Posts}/>
            <UserContext.Provider value={{isAuth, setIsAuth}}>
              <Route path='/login' component={Login} />
              <Route path="/profile" component={()=> <Profile authorized={isAuth}/>} />
              

            </UserContext.Provider>
          
        </Router>

      </div>
    </>
  )
}

export default App