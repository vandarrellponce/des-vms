import express from 'express'
import { createMeeting } from '../controller/meetingController.js'

const router = express.Router()

router.route('/').post(createMeeting)

export default router
