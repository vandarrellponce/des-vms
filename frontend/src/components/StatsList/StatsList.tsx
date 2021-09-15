import React from 'react'
import './StatsList.css'

const Bar = ({ name, value }) => {
  return (
    <div className="bar__wrapper">
      <div className="bar__text__container">
        <span className="bar__value">{value}</span>
        <span className="bar__name">{name}</span>
      </div>
      <div className="bar"></div>
    </div>
  )
}

const Line = ({ name, value }) => {
  return (
    <div className="line__wrapper">
      <div className="bar__text__container">
        <span className="bar__value">{value}</span>
        <span className="bar__name">{name}</span>
      </div>
      <div className="line"></div>
    </div>
  )
}

const StatsList = () => {
  return (
    <div className="statslist__wrapper">
      <Line name="Upcomming Visitors" value="0" />
      <Bar name="Recent Visitors" value="0" />
    </div>
  )
}

export default StatsList
