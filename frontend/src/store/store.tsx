import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from '../reducers/users/userReducer'
import infoReducer from '../reducers/informations/infoReducer'

// INITIAL STATE
const initialState = {}
// ROOT REDUCER
const rootReducer = combineReducers({
	user: userReducer,
	info: infoReducer,
})
// STORE
const middleware = [thunk]
const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
