import React from 'react'
import { Chart } from 'react-google-charts'
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

      <Chart
        width="650px"
        height="auto"
        className="statslist__chart"
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Task', 'Hours per Day'],
          ['Pre-sales Support', 11],
          ['Post-sales Support', 2],
          ['Research & Development', 2],
          ['Office Compliance', 2],
        ]}
        options={{
          title: 'Daily Activity Report',
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  )
}

export default StatsList
