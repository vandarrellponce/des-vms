import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer/FormContainer'
import updateUser from '../actions/users/updateUser'
import CheckoutSteps from '../components/CheckoutSteps/CheckoutSteps'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Axios from 'axios'
import Message from '../components/Message/Message'

const ShippingScreen = ({ history }) => {
	const [personToVisit, setPersonToVisit] = useState('')
	const [start, setStart] = useState(new Date())
	const [end, setEnd] = useState(new Date())
	const [submitError, setSubmitError] = useState(null)
	const dispatch = useDispatch()
	const { personal, health, appointment } = useSelector((state) => state.info)

	// USE EFFECT
	useEffect(() => {
		if (appointment) {
			setPersonToVisit(appointment.personToVisit)
			setStart(appointment.start)
			setEnd(appointment.end)
		}
	}, [])

	// HANDLERS
	const submitHandler = (e) => {
		e.preventDefault()
		dispatch({
			type: 'APPOINTMENT_SUBMIT',
			payload: {
				personToVisit,
				start,
				end,
			},
		})
		Axios.post('/api/meetings', {
			personal,
			health,
			appointment: {
				personToVisit,
				start,
				end,
			},
		})
			.then((res) => {
				const meeting = res.data
				dispatch({ type: 'PASSCODE_READY', payload: meeting })
				history.push(`/meetings/${meeting._id}`)
			})
			.catch((e) => setSubmitError(e.message))
	}
	if (submitError) return <Message children={submitError} />
	return (
		<div>
			<CheckoutSteps step1 step2 step3 />

			<FormContainer>
				<h3>Set Appointment</h3>

				<Form onSubmit={submitHandler}>
					<Form.Group>
						<Form.Label>Name of Person to Visit</Form.Label>

						<Form.Control
							type="text"
							value={personToVisit}
							onChange={(e) => setPersonToVisit(e.target.value)}
							required
						></Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>From </Form.Label>
						<br />
						<DatePicker
							showTimeSelect
							selected={start}
							onChange={(date: Date) => setStart(date)}
							timeFormat="HH:mm"
							timeIntervals={30}
							timeCaption="time"
							dateFormat="MMMM d, yyyy h:mm aa"
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Until</Form.Label>
						<br />
						<DatePicker
							showTimeSelect
							selected={end}
							onChange={(date: Date) => setEnd(date)}
							timeFormat="HH:mm"
							timeIntervals={30}
							timeCaption="time"
							dateFormat="MMMM d, yyyy h:mm aa"
						/>
					</Form.Group>

					<Button type="submit" variant="secondary">
						Proceed
					</Button>
				</Form>
			</FormContainer>
		</div>
	)
}

export default ShippingScreen
