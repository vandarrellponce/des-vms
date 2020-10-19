import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message/Message'
import Loader from '../components/Loader/Loader'
import { LinkContainer } from 'react-router-bootstrap'
import getProductList from '../actions/products/productListActions'
import Axios from 'axios'

const UpcommingVisitorsScreen = ({ history, match }) => {
	const [meetings, setMeetings] = useState([])

	const dispatch = useDispatch()

	// USE EFFECT
	useEffect(() => {
		Axios.get('/api/meetings').then((res) => {
			setMeetings(res.data)
		})
	}, [])

	// HANDLERS
	const deleteHandler = async () => {}
	const createProductHandler = (e) => {}

	return (
		<div>
			<Row className="align-items-center">
				<Col>
					<h1>Upcomming Visitors</h1>
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

export default UpcommingVisitorsScreen
