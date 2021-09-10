import React from 'react'
import { Container, NavLink } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './SubHeader.css'

const SubHeader = () => {
  return (
    <header className="sub-header">
      <Container>
        <div className="sub-header__wrapper">
          <NavLink href="/upcomming" className="link">
            Upcomming
          </NavLink>
          <NavLink href="/recent" className="link">
            Recent
          </NavLink>
        </div>
      </Container>
    </header>
  )
}

export default SubHeader
