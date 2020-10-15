import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer/FormContainer'
import updateUser from '../actions/users/updateUser'
import CheckoutSteps from '../components/CheckoutSteps/CheckoutSteps'

const HealthScreen = ({ history }) => {
	const [value1, setValue1] = useState('')
	const [value2, setValue2] = useState('')
	const [value3, setValue3] = useState('')
	const [value4, setValue4] = useState('')
	const [value5, setValue5] = useState('')
	const [value6, setValue6] = useState('')
	const dispatch = useDispatch()
	const { health } = useSelector((state) => state.info)

	// USE EFFECT
	useEffect(() => {
		if (health) {
			setValue1(health.value1)
			setValue2(health.value2)
			setValue3(health.value3)
			setValue4(health.value4)
			setValue5(health.value5)
			setValue6(health.value6)
		}
	}, [])

	// HANDLERS
	const submitHandler = (e) => {
		e.preventDefault()
		dispatch({
			type: 'HEALTH_SUBMIT',
			payload: {
				value1,
				value2,
				value3,
				value4,
				value5,
				value6,
			},
		})
		history.push('/appointment')
	}

	return (
		<div>
			<CheckoutSteps step1 step2 />
			<FormContainer>
				<h3>Health Declaration</h3>
				<Form onSubmit={submitHandler}>
					<Form.Group>
						<Form.Label>
							<p>
								Have you or anyone you immediately know had a
								confirmed case of COVID-19? (YES/NO)
							</p>{' '}
							If YES please elaborate, including detailed
							information around names, dates and level of
							contact.
						</Form.Label>

						<Form.Control
							type="text"
							value={value1}
							onChange={(e) => setValue1(e.target.value)}
							required
						></Form.Control>
					</Form.Group>

					<Form.Group>
						<Form.Label>
							<p>
								Have you or anyone you immediately know
								travelled nationally or internationally in the
								last month (30 days) (YES/NO)?
							</p>{' '}
							If YES please elaborate and list travel areas
							/Countries
						</Form.Label>

						<Form.Control
							type="text"
							value={value2}
							onChange={(e) => setValue2(e.target.value)}
							required
						></Form.Control>
					</Form.Group>

					<Form.Group>
						<Form.Label>
							<p>
								Have you been to a country or area of concern
								for COVID-19 in 2020? (YES/NO)
							</p>{' '}
							If YES please elaborate
						</Form.Label>

						<Form.Control
							type="text"
							value={value3}
							onChange={(e) => setValue3(e.target.value)}
							required
						></Form.Control>
					</Form.Group>

					<Form.Group>
						<Form.Label>
							<p>
								Do you or anyone you know currently have any of
								the symptoms associated with COVID-19 or
								similar? (YES/NO)
							</p>{' '}
							If YES please elaborate
						</Form.Label>

						<Form.Control
							type="text"
							value={value4}
							onChange={(e) => setValue4(e.target.value)}
							required
						></Form.Control>
					</Form.Group>

					<Form.Group>
						<Form.Label>
							<p>
								Have you been tested for the COVID-19 virus?
								(YES/NO)
							</p>{' '}
							If YES please elaborate including detailed
							information around dates
						</Form.Label>

						<Form.Control
							type="text"
							value={value5}
							onChange={(e) => setValue5(e.target.value)}
							required
						></Form.Control>
					</Form.Group>

					<Form.Group>
						<Form.Label>
							<p>
								Have you worked with / on or within other
								projects / productions in the last 20 days?
								(YES/NO)
							</p>{' '}
							If YES please elaborate & list, including location
							of work
						</Form.Label>

						<Form.Control
							type="text"
							value={value6}
							onChange={(e) => setValue6(e.target.value)}
							required
						></Form.Control>
					</Form.Group>
					<p>
						By signing this document I declare all of the above to
						be true and correct at the time of signing, and that I
						do not currently have any of the symptoms associated
						with the COVID-19 or similar. I agree to comply with all
						reasonable requests and measure to ensure I do my part
						to keep the workplace COVID free.{' '}
					</p>
					<Button type="submit" variant="secondary">
						Proceed
					</Button>
				</Form>
			</FormContainer>
		</div>
	)
}

export default HealthScreen
