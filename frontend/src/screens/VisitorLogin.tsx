import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import QrReader from 'react-qr-reader'
import FormContainer from '../components/FormContainer/FormContainer'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Message from '../components/Message/Message'

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
								<Message
									children={'STATUS OK'}
									variant="success"
								/>
								<Form.Group>
									<Form.Label>
										Name of Person to Visit :{' '}
										{meeting.appointment.personToVisit}
									</Form.Label>
								</Form.Group>
								<Form.Group>
									<Form.Label>
										From : {meeting.appointment.start}{' '}
									</Form.Label>
									<br />
								</Form.Group>
								<Form.Group>
									<Form.Label>
										Until : {meeting.appointment.end}
									</Form.Label>
									<br />
								</Form.Group>

								<Button type="submit" variant="secondary">
									Back
								</Button>
							</Form>
						</FormContainer>
					) : (
						<Message
							children={'Invalid / Expired passcode'}
							variant="danger"
						/>
					)}
				</div>
			)}
		</div>
	)
}

export default VisitorLogin
