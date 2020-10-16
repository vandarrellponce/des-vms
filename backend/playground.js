import QRCode from 'qrcode'

/* QRCode.toDataURL(
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjgzY2NmZDg0MTE1ZTBjMmNmZDcwOWEiLCJpYXQiOjE2MDI3NTQ3NTksImV4cCI6MTYwMjg0MTE1OX0.A73kegs4A8GgP0qCQfoNqQqqkAxSFiZbp7xyyG1oXKI',
	function (err, url) {
		console.log(url)
	}
) */

/* QRCode.toString(
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjgzY2NmZDg0MTE1ZTBjMmNmZDcwOWEiLCJpYXQiOjE2MDI3NTQ3NTksImV4cCI6MTYwMjg0MTE1OX0.A73kegs4A8GgP0qCQfoNqQqqkAxSFiZbp7xyyG1oXKI',
	{ type: 'terminal' },
	function (err, url) {
		console.log(url)
	}
) */

const answer = new Date('2020-10-15T18:00:00.000Z') - new Date()
console.log(Math.ceil(answer / 3.6e6))
