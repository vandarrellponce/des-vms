import React from 'react'
import './Header.css'
import SubHeader from './SubHeader'

const Header = () => {
  return (
    <div className="header__main__wrapper">
      <div className="header__wrapper">
        <div className="right__links__container">
          <div className="link right__link logo">VMgmt</div>
          <div className="link right__link">Dashboard</div>
          <div className="link right__link">Team</div>
        </div>

        <div className="left__links__container">
          <div className="left__link"> My Account</div>
          <div className="left__link">
            <Organization />
          </div>
        </div>
      </div>
      <SubHeader />
    </div>
  )
}

const Organization = () => {
  return (
    <div className="org__wrapper">
      <div className="org__text__container">
        <span className="org__title">ORGANIZATION</span>
        <span className="org__name">Electronics Security Corporation</span>
      </div>
      <div className="header__dropdown"></div>
    </div>
  )
}

export default Header
