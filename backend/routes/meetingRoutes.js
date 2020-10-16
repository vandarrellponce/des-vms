import express from 'express'
import { createMeeting, getMeeting } from '../controller/meetingController.js'

const router = express.Router()

router.route('/').post(createMeeting)
router.route('/:meetingId').get(getMeeting)

export default router
