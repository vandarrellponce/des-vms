import React, { useState } from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import logoutUser from '../../actions/users/logoutUser'
import { RiArrowDownSLine } from 'react-icons/ri'

const Organization = () => {
  const [show, setShow] = useState(false)
  return (
    <div
      className="header__organization__wrapper"
      onClick={() => setShow((prev) => !prev)}
    >
      <div className="header__organization__text__container">
        <span className="organization__title">ORGANIZATION</span>
        <span className="organization__name">
          Electronics Security Systems Corporation
        </span>
      </div>
      <div className="organization__dropdown__icon">
        <RiArrowDownSLine />
      </div>
      <div className={show ? 'organization__dropdown' : 'hide'}>
        <div className="dropdown__item__orgname">
          <span>Electronics Security Systems Corporation</span>
        </div>
        <div className="dropdown__item">
          <span>Change Org. Plan</span>
        </div>
        <div className="dropdown__item">
          <span>Update Organization</span>
        </div>
      </div>
    </div>
  )
}

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
          <Organization />
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
