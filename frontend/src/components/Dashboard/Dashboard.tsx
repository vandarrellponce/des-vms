import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Chart from 'react-google-charts'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div>
      <Row>
        <Col xs={12} md={6}>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Task', 'Hours per Day'],
              ['Work', 11],
              ['Eat', 2],
              ['Commute', 2],
              ['Watch TV', 2],
              ['Sleep', 7],
            ]}
            options={{
              title: 'My Daily Activities',
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </Col>
        <Col xs={12} md={6}>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Duties', '2010 Population'],
              ['Pre-sales Support', 40],
              ['Post-sales Support', 38],
              ['Research & Development', 10],
              ['Office Compliance', 21],
            ]}
            options={{
              title: 'Daily Reports based on Category',
              chartArea: { width: '50%' },
              hAxis: {
                title: 'Total Population',
                minValue: 0,
              },
              vAxis: {
                title: 'Duties',
              },
            }}
            // For tests
            rootProps={{ 'data-testid': '1' }}
          />
        </Col>
        <Col xs={12} className="dashboard__calendar">
          <Chart
            width={1000}
            height={350}
            chartType="Calendar"
            loader={<div>Loading Chart</div>}
            data={[
              [
                { type: 'date', id: 'Date' },
                { type: 'number', id: 'Won/Loss' },
              ],
              [new Date(2021, 3, 13), 37032],
              [new Date(2021, 3, 14), 38024],
              [new Date(2021, 3, 15), 38024],
              [new Date(2021, 3, 16), 38108],
              [new Date(2021, 3, 17), 38229],
            ]}
            options={{
              title: 'Daily Activity Reports',
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
