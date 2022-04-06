import React, { useState, useRef } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import style from './NavigationBar.module.css';

const NavigationBar = (props) => {
  const [background, setBackground] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };
  useRef(() => {
window.addEventListener('scroll', changeBackground);
 
  }, []);

  return (
    <Navbar style={{width:'100%'}}
      collapseOnSelect
      expand='lg'
      variant='light'
      fixed='top'
      className={
        background
          ? style.backgroundChange
          : style.backgroundColor
      }
    >
      <Container>
        <Navbar.Brand
          className={style.navText}
          href='#home'
          onClick={props.home}
        >
          HA
        </Navbar.Brand>
        <Navbar.Toggle
          className={style.toggler}
          aria-controls='responsive-navbar-nav'
        />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav
            className='justify-content-end'
            style={{ width: '100%', alignItems: 'center' }}
          >
            <Nav.Link
              className={style.navText}
              href='#Home'
              onClick={props.home}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={style.navText}
              href='#About'
              onClick={props.about}
            >
              About
            </Nav.Link>
            <Nav.Link
              className={style.navText}
              href='#Projects'
              onClick={props.projects}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              className={style.navText}
              href='#Contact'
              onClick={props.contact}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
