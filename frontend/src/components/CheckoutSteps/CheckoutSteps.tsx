import React from 'react'

import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

interface Props {
	step1?: any
	step2?: any
	step3?: any
	step4?: any
}

const CheckoutSteps: React.FC<Props> = ({ step1, step2, step3, step4 }) => {
	return (
		<Nav className="justify-content-center mb-4">
			<Nav.Item>
				{step1 ? (
					<LinkContainer to="/personal">
						<Nav.Link>Personal Info</Nav.Link>
					</LinkContainer>
				) : (
					<Nav.Link disabled>Personal Info</Nav.Link>
				)}
			</Nav.Item>

			<Nav.Item>
				{step2 ? (
					<LinkContainer to="/health">
						<Nav.Link>Health Status</Nav.Link>
					</LinkContainer>
				) : (
					<Nav.Link disabled>Health Status</Nav.Link>
				)}
			</Nav.Item>

			<Nav.Item>
				{step3 ? (
					<LinkContainer to="/appointment">
						<Nav.Link>Appointment</Nav.Link>
					</LinkContainer>
				) : (
					<Nav.Link disabled>Appointment</Nav.Link>
				)}
			</Nav.Item>

			<Nav.Item>
				{step4 ? (
					<LinkContainer to="/passcode">
						<Nav.Link>Passcode</Nav.Link>
					</LinkContainer>
				) : (
					<Nav.Link disabled>Passcode</Nav.Link>
				)}
			</Nav.Item>
		</Nav>
	)
}

export default CheckoutSteps
