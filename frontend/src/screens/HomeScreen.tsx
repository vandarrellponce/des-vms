import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import FormContainer from '../components/FormContainer/FormContainer'
import StatsList from '../components/StatsList/StatsList'
import './HomeScreen.css'

const Home = ({ history }) => {
  useEffect(() => {}, [])

  return (
    <div>
      <h3 className="home__title">Your Dashboard</h3>
      <div className="home__wrapper">
        <div className="home__stats__container">
          <StatsList />
        </div>
        <div className="home__buttons__container">
          <FormContainer>
            {' '}
            <h4>Available Actions</h4>
            <Button
              style={{ width: '100%', marginTop: '10px' }}
              onClick={(e) => history.push('/personal')}
            >
              Create Appointment
            </Button>
            <br />
            <br />
            <Button
              style={{ width: '100%' }}
              onClick={(e) => history.push('/visitorlogin')}
            >
              Login a Visitor
            </Button>
            <br />
            <br />
            <Button
              style={{ width: '100%' }}
              onClick={(e) => history.push('/visitorlogout')}
            >
              Logout a Visitor
            </Button>
          </FormContainer>
        </div>
      </div>
    </div>
  )
}

export default Home
