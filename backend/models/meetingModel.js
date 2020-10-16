import mongoose from 'mongoose'

const meetingSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			/* required: true, */
			ref: 'User',
		},
		visitor: {
			firstname: { type: String, required: true },
			lastname: { type: String, required: true },
			age: { type: String, required: true },
			address: { type: String, required: true },
			contact: { type: String, required: true },
		},
		healthDeclaration: {
			value1: { type: String, required: true },
			value2: { type: String, required: true },
			value3: { type: String, required: true },
			value4: { type: String, required: true },
			value5: { type: String, required: true },
			value6: { type: String, required: true },
		},
		appointment: {
			personToVisit: { type: String, required: true },
			start: { type: Date, required: true },
			end: { type: Date, required: true },
		},
		token: { type: String, required: true },
	},
	{ timestamps: true }
)

const Meeting = mongoose.model('Meeting', meetingSchema)

export default Meeting
