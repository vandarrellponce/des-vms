const infoReducer = (
	state = {
		personal: null,
		health: null,
		appointment: null,
		meeting: null,
	},
	action
) => {
	switch (action.type) {
		// USER LOGIN
		case 'PERSONAL_SUBMIT': {
			return {
				...state,
				personal: action.payload,
			}
		}
		case 'HEALTH_SUBMIT': {
			return {
				...state,
				health: action.payload,
			}
		}
		case 'APPOINTMENT_SUBMIT': {
			return {
				...state,
				appointment: action.payload,
			}
		}
		case 'PASSCODE_READY': {
			return {
				...state,
				meeting: action.payload,
			}
		}

		default:
			return state
	}
}

export default infoReducer
