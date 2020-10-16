import React, { useEffect, useState } from 'react'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import QRCode from 'qrcode'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer/FormContainer'
import Loader from '../components/Loader/Loader'
import Container from 'react-bootstrap/esm/Container'
import Axios from 'axios'
import moment from 'moment'
import jwt from 'jsonwebtoken'

const PasscodeScreen = ({ history, match }) => {
	const { meeting } = useSelector((state) => state.info)

	const dispatch = useDispatch()
	const meetingId = match.params.meetingId
	useEffect(() => {
		if (!meeting) {
			Axios.get(`http://localhost:4000/api/meetings/${meetingId}`).then(
				(res) => {
					dispatch({
						type: 'PASSCODE_READY',
						payload: res.data,
					})
				}
			)
		}
	}, [meeting])

	if (!meeting) return <Loader />
	/* const decoded = jwt.verify(meeting.token, 'shredsecret')
	console.log(decoded) */
	let passcodeUrl
	QRCode.toDataURL(meeting.token, function (err, url) {
		passcodeUrl = url
	})
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{' '}
			<h2 className="text-center">Passcode</h2>
			{meeting ? (
				<div>
					<Image
						style={{ objectFit: 'contain' }}
						src={passcodeUrl}
						alt="passcode"
						className="mx-10"
					/>
					<br />
					<br />
					<h5>
						Expires In : {moment(meeting.appointment.end).fromNow()}
					</h5>
				</div>
			) : (
				<div>
					<h2>No Passcod Yet</h2>
					<p>Please make an appointment in the home screen</p>
				</div>
			)}
		</div>
	)
}

export default PasscodeScreen
