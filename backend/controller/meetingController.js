// @desc	Create user and generate token
// @route	Post /api/users/login

import expressAsyncHandler from 'express-async-handler'

// @access	Public
export const createMeeting = expressAsyncHandler(async (req, res) => {
	try {
		const { personal, health, appointment } = req.body
		// generate token

		// create meeting object

		// save meeting object

		// create qr url for the token

		// send back meeting object and qr code
	} catch (error) {
		res.status(404)
		throw new Error(error.message)
	}
})
