import {Navbar, Nav} from 'react-bootstrap'
import Posts from '../posts/posts'
import {BrowserRouter as Router, Redirect, Route, Switch, Link}  from 'react-router-dom';
export default function Header(){
  
  return(
    <>
      <div>
        

          <Navbar bg="light" expand="lg">
            <Navbar.Brand >Test-Quraga</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link ><Link to="/">Main</Link></Nav.Link>
                <Nav.Link ><Link to="/login">Login</Link></Nav.Link>
                <Nav.Link ><Link to="/posts">Posts</Link></Nav.Link>
                <Nav.Link ><Link to="/profile">Profile</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        
      </div>
    </>
  )
}