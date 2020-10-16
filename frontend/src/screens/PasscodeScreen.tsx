import React, { useEffect } from 'react'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer/FormContainer'
import Loader from '../components/Loader/Loader'
import Container from 'react-bootstrap/esm/Container'

const PasscodeScreen = ({ history }) => {
	const { meeting } = useSelector((state) => state.info)
	useEffect(() => {}, [])
	/* if (!meeting) return <Loader /> */
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
						src={meeting.tokenQR}
						alt="passcode"
						className="mx-10"
					/>
					<h4>Expires In : {meeting.expiresIn}</h4>
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
