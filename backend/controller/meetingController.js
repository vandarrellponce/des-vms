import jwt from 'jsonwebtoken'
import QRCode from 'qrcode'
import expressAsyncHandler from 'express-async-handler'
import Meeting from '../models/meetingModel.js'

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

    // create meeting object and save
    const meeting = await new Meeting({
      visitor: personal,
      healthDeclaration: health,
      appointment,
      token,
    }).save()

    res.send(meeting)

    // send back meeting object and qr code
  } catch (error) {
    res.status(400)
    console.log(error)
    throw new Error(error.message)
  }
})

// @desc	Get meeting by id
// @route	get /api/meetings/:meetingId
// @access	Public
export const getMeetingById = expressAsyncHandler(async (req, res) => {
  try {
    const meeting = await Meeting.findById(req.params.meetingId)
    if (!meeting) throw new Error('No Meeting Found')
    res.send(meeting)

    // send back meeting object and qr code
  } catch (error) {
    res.status(400)
    console.log(error)
    throw new Error(error.message)
  }
})

// @desc	Get all meetings
// @route	get /api/meetings/
// @access	Private/Admin
export const getMeetings = expressAsyncHandler(async (req, res) => {
  try {
    const meetings = await Meeting.find({})
    res.send(meetings)

    // send back meeting object and qr code
  } catch (error) {
    res.status(400)
    console.log(error)
    throw new Error(error.message)
  }
})

export const deleteMeetingById = expressAsyncHandler(async (req, res) => {
  try {
    const deletedMeeting = await Meeting.findOneAndDelete({
      _id: req.params.meetingId,
    })

    if (!deletedMeeting) throw new Error('No such meeting id found')
  } catch (error) {
    res.status(400)
    console.log(error)
    throw new Error(error.message)
  }
})
