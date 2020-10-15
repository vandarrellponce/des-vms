import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
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
					<LinkContainer to="/login">
						<Nav.Link>Step 1</Nav.Link>
					</LinkContainer>
				) : (
					<Nav.Link disabled>Step 1</Nav.Link>
				)}
			</Nav.Item>

			<Nav.Item>
				{step2 ? (
					<LinkContainer to="/shipping">
						<Nav.Link>Step 2</Nav.Link>
					</LinkContainer>
				) : (
					<Nav.Link disabled>Step 2</Nav.Link>
				)}
			</Nav.Item>

			<Nav.Item>
				{step3 ? (
					<LinkContainer to="/payment">
						<Nav.Link>Step 3</Nav.Link>
					</LinkContainer>
				) : (
					<Nav.Link disabled>Step 3</Nav.Link>
				)}
			</Nav.Item>

			<Nav.Item>
				{step4 ? (
					<LinkContainer to="/placeorder">
						<Nav.Link>Step 4</Nav.Link>
					</LinkContainer>
				) : (
					<Nav.Link disabled>Step 4</Nav.Link>
				)}
			</Nav.Item>
		</Nav>
	)
}

export default CheckoutSteps
