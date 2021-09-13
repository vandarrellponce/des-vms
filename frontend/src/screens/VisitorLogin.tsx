import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import QrReader from 'react-qr-reader'
import FormContainer from '../components/FormContainer/FormContainer'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Message from '../components/Message/Message'
import './VisitorLogin.css'

const VisitorLogin = () => {
  const [result, setResult] = useState('')
  const [meeting, setMeeting] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (result) {
      Axios.post('http://localhost:4000/api/visitor/login', {
        token: result,
      })
        .then((res) => {
          console.log(res.data)
          setMeeting(res.data.meeting)
        })
        .catch((error) => {
          const errorMessage = error.response?.data?.message
            ? error.response.data.message
            : error.message
          setError(errorMessage)
        })
    }
  }, [result])

  const handleScan = (data) => {
    setResult(data)
  }

  const handleError = (err) => {
    console.error(err)
  }

  return (
    <div>
      <h2>Visitor Login</h2>
      {!result ? (
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
      ) : (
        <div>
          {meeting ? (
            <FormContainer>
              <Form>
                <Message children={'STATUS OK'} variant="success" />
                Appointment Details:
                <div className="visitor-login__meeting-details">
                  <p>
                    Name of Person to visit:{' '}
                    <span>{meeting.appointment.personToVisit} </span>
                  </p>
                  <div className="visitor-login__time">
                    <p>
                      From{' '}
                      <span>
                        {' '}
                        {new Date(
                          meeting.appointment.start
                        ).toLocaleDateString()}{' '}
                        {new Date(
                          meeting.appointment.start
                        ).toLocaleTimeString()}{' '}
                      </span>
                    </p>
                    <p>
                      Until{' '}
                      <span>
                        {' '}
                        {new Date(
                          meeting.appointment.end
                        ).toLocaleDateString()}{' '}
                        {new Date(meeting.appointment.end).toLocaleTimeString()}
                      </span>{' '}
                    </p>
                  </div>
                </div>
                Visitor Details:
                <div className="visitor-login__visitor-details">
                  <p>
                    Name{' '}
                    <span>
                      {meeting.visitor.firstname} {meeting.visitor.lastname}{' '}
                    </span>
                  </p>
                  <p>
                    Address <span>{meeting.visitor.address}</span>
                  </p>
                  <p>
                    Contact Number <span>{meeting.visitor.contact}</span>{' '}
                  </p>
                </div>
                <Button type="submit" variant="secondary">
                  Back
                </Button>
              </Form>
            </FormContainer>
          ) : (
            <Message children={'Invalid / Expired passcode'} variant="danger" />
          )}
        </div>
      )}
    </div>
  )
}

export default VisitorLogin
