import express from 'express'
import {
	createMeeting,
	getMeetings,
	getMeetingById,
} from '../controller/meetingController.js'

const router = express.Router()

router.route('/').post(createMeeting).get(getMeetings)
router.route('/:meetingId').get(getMeetingById)

export default router
