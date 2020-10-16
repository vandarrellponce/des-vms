import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import QrReader from 'react-qr-reader'

const VisitorLogin = () => {
	const [result, setResult] = useState('')
	const [meeting, setMeeting] = useState(null)

	useEffect(() => {
		if (result) {
			Axios.post('http://localhost:4000/api/visitor/login', {
				token: result,
			}).then((res) => {
				console.log(res.data)
				setMeeting(res.data)
			})
		}
	}, [result])

	const handleScan = (data) => {
		setResult(data)
	}

	const handleError = (err) => {
		console.error(err)
	}

	return (
		<div>
			<h2>Visitor Login</h2>
			{!result ? (
				<QrReader
					delay={300}
					onError={handleError}
					onScan={handleScan}
					style={{ width: '100%' }}
				/>
			) : (
				<div>
					<p>{result}</p>
				</div>
			)}
		</div>
	)
}

export default VisitorLogin
