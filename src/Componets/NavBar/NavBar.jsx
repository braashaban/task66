import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import './NavBar.css'
import logo from  '.././../imgs/logo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
/* import Dropdown from 'react-bootstrap/Dropdown';
import { NavDropdown } from 'react-bootstrap' */

const NavBar = () => {
  const [select , setSelect] = useState([])
  useEffect(() => {
      axios.get('https://restcountries.com/v3.1/all')

      .then((response) =>{
          setSelect(response.data)
      })
  },[]);

  return (
  
<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
        <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
{/* ------------------------router-------------- */}
          <Nav.Link to='/task66' as={Link} className="links">Home</Nav.Link>

          <NavDropdown title="Collection" id="basic-nav-dropdown" className="links">
              <NavDropdown.Item href="#action/3.1"  className="links">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"  className="links">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="links">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className="links">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to='/task66/Android'  as={Link}  className="links"> Android</Nav.Link>
           <Nav.Link  to='/task66/Collection'  as={Link}  className="links">Shop</Nav.Link>
       
          <Nav.Link to='/task66/Collection'  as={Link} className="links"> Collection</Nav.Link>
          <Nav.Link   as={Link}  className="links">Shop </Nav.Link>
          <Nav.Link  as={Link}  className="links"> Memory&Storage</Nav.Link>
            <NavDropdown title="Page" id="basic-nav-dropdown" className="links">
              <NavDropdown.Item href="#action/3.1"  className="links">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"  className="links">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"  className="links">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"  className="links">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
                
 
   <FontAwesomeIcon icon={faUser} className="icons" />
   <FontAwesomeIcon icon={faCartPlus} className="icons" />
    <FontAwesomeIcon icon={faSearch} className="icons"/>
  
   <select className='ms-2 select-menu'>
        {
            select.map((select) =>{
                return(
                    <option className='selected'>
                        {select.name.common}
                    </option>
                )
            })
        }
    </select>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      
       
  )
}


/* 

   <img src={logo} alt="logo" />
    <div className="items">


               
   <div className="icons-group">
   <FontAwesomeIcon icon={faUser} className="icons" />
    <FontAwesomeIcon icon={faSearch} className="icons"/>
    <FontAwesomeIcon icon={faCartPlus} className="icons" />
   </div>
        </ul>

        </div>
       
   <div className="icons-group">
   <FontAwesomeIcon icon={faUser} className="icons" />
    <FontAwesomeIcon icon={faSearch} className="icons"/>
    <FontAwesomeIcon icon={faCartPlus} className="icons" />
   </div>
   
  
   <FontAwesomeIcon icon={faBars} className="iconsBar" />
 */

export default NavBar

 

 