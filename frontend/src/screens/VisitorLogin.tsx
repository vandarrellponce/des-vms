import Axios from 'axios'
import React, { useState } from 'react'
import QrReader from 'react-qr-reader'

const VisitorLogin = () => {
	const [result, setResult] = useState('')

	const handleScan = (data) => {
		setResult(data)
		Axios.post('http://localhost:4000/api/visitorlogin', {
			token: data,
		}).then((res) => {
			console.log(res.data)
		})
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
