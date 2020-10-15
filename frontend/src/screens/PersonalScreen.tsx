import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer/FormContainer'
import updateUser from '../actions/users/updateUser'
import CheckoutSteps from '../components/CheckoutSteps/CheckoutSteps'

const ShippingScreen = ({ history }) => {
	const [firstname, setFirstname] = useState('')
	const [lastname, setLastname] = useState('')
	const [age, setAge] = useState('')
	const [address, setAddress] = useState('')
	const [contact, setContact] = useState('')
	const dispatch = useDispatch()
	const { personal } = useSelector((state) => state.info)

	// USE EFFECT
	useEffect(() => {
		if (personal) {
			setFirstname(personal.firstname)
			setLastname(personal.lastname)
			setAge(personal.age)
			setAddress(personal.address)
			setContact(personal.contact)
		}
	}, [personal])

	// HANDLERS
	const submitHandler = (e) => {
		e.preventDefault()
		dispatch({
			type: 'PERSONAL_SUBMIT',
			payload: {
				firstname,
				lastname,
				age,
				address,
				contact,
			},
		})
		history.push('/health')
	}

	return (
		<div>
			<CheckoutSteps step1 />
			<FormContainer>
				<h3>Personal Information</h3>
				<Form onSubmit={submitHandler}>
					<Form.Group>
						<Form.Label>First Name</Form.Label>

						<Form.Control
							type="text"
							value={firstname}
							onChange={(e) => setFirstname(e.target.value)}
							required
						></Form.Control>
					</Form.Group>

					<Form.Group>
						<Form.Label>Last Name</Form.Label>

						<Form.Control
							type="text"
							value={lastname}
							onChange={(e) => setLastname(e.target.value)}
							required
						></Form.Control>
					</Form.Group>

					<Form.Group>
						<Form.Label>Age</Form.Label>

						<Form.Control
							type="text"
							value={age}
							onChange={(e) => setAge(e.target.value)}
							required
						></Form.Control>
					</Form.Group>

					<Form.Group>
						<Form.Label>Complete Address</Form.Label>

						<Form.Control
							type="text"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							required
						></Form.Control>
					</Form.Group>

					<Form.Group>
						<Form.Label>Contact No.</Form.Label>

						<Form.Control
							type="text"
							value={contact}
							onChange={(e) => setContact(e.target.value)}
							required
						></Form.Control>
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
