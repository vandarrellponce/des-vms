import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import FormContainer from '../components/FormContainer/FormContainer'

const Home = ({ history }) => {
  useEffect(() => {}, [])

  return (
    <div style={{ marginTop: '50px' }}>
      <FormContainer>
        {' '}
        <h2 className="text-center">Home</h2>
        <Button
          style={{ width: '100%' }}
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
  )
}

export default Home
