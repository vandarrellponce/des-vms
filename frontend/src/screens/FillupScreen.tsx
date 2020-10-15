import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer/FormContainer'
import updateUser from '../actions/users/updateUser'
import CheckoutSteps from '../components/CheckoutSteps/CheckoutSteps'

const ShippingScreen = ({ history }) => {
	const [street, setStreet] = useState('')
	const [sitio, setSitio] = useState('')
	const [barangay, setBaranggay] = useState('')
	const [city, setCity] = useState('')
	const [mobile, setMobile] = useState('')

	// USE EFFECT
	useEffect(() => {}, [])

	// HANDLERS
	const submitHandler = (e) => {
		e.preventDefault()
	}

	return (
		<FormContainer>
			<CheckoutSteps step1 step2 />
			<h1>Fill Up Form</h1>
			<Form onSubmit={submitHandler}>
				<Form.Group controlId="name">
					<Form.Label id="street">Question 1</Form.Label>

					<Form.Control
						type="text"
						value={street}
						onChange={(e) => setStreet(e.target.value)}
						required
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="sitio">
					<Form.Label id="sitio">Question 2</Form.Label>

					<Form.Control
						type="text"
						value={sitio}
						onChange={(e) => setSitio(e.target.value)}
						required
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="barangay">
					<Form.Label id="barangay">Question 3</Form.Label>

					<Form.Control
						type="text"
						value={barangay}
						onChange={(e) => setBaranggay(e.target.value)}
						required
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="city">
					<Form.Label id="barangay">Question 4</Form.Label>

					<Form.Control
						type="text"
						value={city}
						onChange={(e) => setCity(e.target.value)}
						required
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="mobile">
					<Form.Label id="mobile">Question 5</Form.Label>

					<Form.Control
						type="text"
						value={mobile}
						onChange={(e) => setMobile(e.target.value)}
						required
					></Form.Control>
				</Form.Group>
				<Button type="submit" variant="secondary">
					Proceed
				</Button>
			</Form>
		</FormContainer>
	)
}

export default ShippingScreen
