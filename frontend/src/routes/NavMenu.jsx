import React from 'react'
import {Navbar, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function NavMenu() {
  return (
    <header className="App-header">
        <Navbar bg='dark' variant='dark' className='nav-bar'>
        <Container>
            <LinkContainer to="/">
            <Navbar.Brand>{process.env.REACT_APP_LOGO_NAME}</Navbar.Brand>
            </LinkContainer>
        </Container>
        </Navbar>
    </header>

  )
}

export default NavMenu