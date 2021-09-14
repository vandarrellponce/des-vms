import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import logoutUser from '../../actions/users/logoutUser'

const Header = () => {
  const { userInfo } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  // HANDLERS
  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(logoutUser())
  }

  return (
    <header>
      <Navbar
        expand="lg"
        collapseOnSelect
        style={{
          backgroundColor: 'rgb(0,0,0)',
          height: '80px',
        }}
      >
        <Container>
          <LinkContainer to="/" style={{ color: '#AEAEAE' }}>
            <Navbar.Brand>
              <i
                className="fas fa-users-cog size-5x"
                style={{ color: '#AEAEAE' }}
              >
                {' '}
              </i>{' '}
              VMgmt
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            {/* margin left auto */}
            <Nav className="ml-auto">
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                  <LinkContainer to="/profile" style={{ color: '#AEAEAE' }}>
                    <NavDropdown.Item>My Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item
                    onClick={logoutHandler}
                    style={{ color: '#AEAEAE' }}
                  >
                    Logout
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <LinkContainer to="/profile" style={{ color: '#AEAEAE' }}>
                    <NavDropdown.Item>Other Link</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login" style={{ color: '#AEAEAE' }}>
                  <Nav.Link>
                    <i className="fas fa-user px-1"></i>
                    Login
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
            {/* <Form inline>
						<FormControl
							type="text"
							placeholder="Search"
							className="mr-sm-2"
						/>
						<Button variant="outline-success">Search</Button>
					</Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
