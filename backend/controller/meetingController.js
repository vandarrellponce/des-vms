import jwt from 'jsonwebtoken'
import QRCode from 'qrcode'
import expressAsyncHandler from 'express-async-handler'

// @desc	Create meeting and generate token
// @route	Post /api/meetings
// @access	Public
export const createMeeting = expressAsyncHandler(async (req, res) => {
	try {
		const { personal, health, appointment } = req.body
		const milliseconds = new Date(appointment.end) - new Date()
		const hours = Math.ceil(milliseconds / 3.6e6)
		const expiry = `${hours}h`
		// generate token
		const token = jwt.sign(
			{
				_id: 'dummyForNow',
			},
			process.env.JWT_SECRET,
			{
				expiresIn: expiry,
			}
		)

		// create meeting object

		// save meeting object

		// create qr url for the token
		QRCode.toDataURL(JSON.stringify(token), function (err, url) {
			res.send({ _id: 'dummyId', tokenQR: url, expiresIn: expiry })
		})

		// send back meeting object and qr code
	} catch (error) {
		res.status(401)
		console.log(error)
		throw new Error(error.message)
	}
})
