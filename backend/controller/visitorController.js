import expressAsyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import Meeting from '../models/meetingModel.js'

// @desc	Login visitor
// @route	Post /api/meetings/:meetingId
// @access	Public
export const loginVisitor = expressAsyncHandler(async (req, res) => {
	try {
		// retreive token from body
		const token = req.body.token

		// Protection if no token provided
		if (!token)
			throw new Error('Not authorized - Invalid / No token provided')

		// Verify if token is valid
		const decoded = jwt.verify(token, process.env.JWT_SECRET)

		// find meeting with token
		const meeting = await Meeting.findOne({
			token: token,
		})

		// create a login time for visitor

		// send the meeting in response
		res.send({ meeting, status: 'valid' })
	} catch (error) {
		res.status(400)
		throw new Error(error.message)
	}
})
