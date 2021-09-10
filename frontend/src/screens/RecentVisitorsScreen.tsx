import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { LinkContainer } from 'react-router-bootstrap'

import Axios from 'axios'

const RecentVisitorsScreen = ({ history, match }) => {
	const [meetings, setMeetings] = useState([])

	// USE EFFECT
	useEffect(() => {}, [])

	// HANDLERS
	const deleteHandler = async () => {}
	const createProductHandler = (e) => {}

	return (
		<div>
			<Row className="align-items-center">
				<Col>
					<h1>Recent Visitors</h1>
				</Col>
				{/* <Col className="text-right">
					<Button className="my-3" onClick={createProductHandler}>
						<i className="fas fa-plus"></i>
						Create Product
					</Button>
				</Col> */}
			</Row>
			<Table striped hover responsive className="table-sm">
				<thead>
					<tr>
						<th>NAME OF VISITOR</th>
						<th>PERSON TO VISIT</th>
						<th>SCHEDULE FROM</th>
						<th>SCHEDULE UNTIL</th>
						<th>LOGIN TIME</th>
						<th>LOGOUT TIME</th>
						<th>ACTIONS</th>
					</tr>
				</thead>
				<tbody>
					{meetings.map((meeting) => {
						return (
							<tr key={meeting._id}>
								<td>{`${meeting.visitor.firstname} ${meeting.visitor.lastname}`}</td>
								<td>{meeting.appointment.personToVisit}</td>
								<td>{meeting.appointment.start}</td>
								<td>{meeting.appointment.end}</td>

								<td>
									<LinkContainer to={`/`}>
										<Button variant="info" className="btn-sm">
											<i className="fas fa-edit"></i>
										</Button>
									</LinkContainer>
									{'     '}
									<Button
										variant="danger"
										className="btn-sm"
										onClick={() => deleteHandler()}
									>
										<i className="fas fa-trash"></i>
									</Button>
								</td>
							</tr>
						)
					})}
				</tbody>
			</Table>
		</div>
	)
}

export default RecentVisitorsScreen
