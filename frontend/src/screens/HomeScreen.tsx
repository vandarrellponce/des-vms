import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Dashboard from '../components/Dashboard/Dashboard'
import FormContainer from '../components/FormContainer/FormContainer'
import StatsList from '../components/StatsList/StatsList'
import './HomeScreen.css'

const Home = ({ history }) => {
  useEffect(() => {}, [])

  return (
    <div>
      <h3 className="home__title">Your Dashboard</h3>
      <Dashboard />
      {/* RerportList */}
    </div>
  )
}

export default Home

const VisitorActions = () => {
  return (
    <FormContainer>
      {' '}
      <h4 style={{ color: '#969b9e' }}>Available Actions</h4>
      <Button
        style={{
          width: '100%',
          marginTop: '10px',
          fontSize: '12px',
          backgroundColor: '#1A1D23',
        }}
        /*  onClick={(e) => history.push('/personal')} */
      >
        Create Appointment
      </Button>
      <br />
      <br />
      <Button
        style={{ width: '100%', fontSize: '12px' }}
        /*  onClick={(e) => history.push('/visitorlogin')} */
      >
        Login a Visitor
      </Button>
      <br />
      <br />
      <Button
        style={{ width: '100%', fontSize: '12px' }}
        /*  onClick={(e) => history.push('/visitorlogout')} */
      >
        Logout a Visitor
      </Button>
    </FormContainer>
  )
}
