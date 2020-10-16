import express from 'express'
import { loginVisitor } from '../controller/visitorController.js'

const router = express.Router()

router.route('/login').post(loginVisitor)

export default router
