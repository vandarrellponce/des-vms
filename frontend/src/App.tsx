import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreen'
import { useDispatch, useSelector } from 'react-redux'
import { authUser } from './actions/users/loginUser'
import PersonalScreen from './screens/PersonalScreen'
import HealthScreen from './screens/HealthScreen'
import AppointmentScreen from './screens/AppointmentScreen'

const App = () => {
	const { userInfo } = useSelector((state) => state.user)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(authUser())
	}, [])

	return (
		<BrowserRouter>
			<Header />
			<main className="py-3">
				<Container>
					{/* <Route path="/fillup" component={FillupScreen} /> */}

					<Route path="/login" component={LoginScreen} />
					<Route path="/register" component={RegisterScreen} />
					<Route path="/profile" component={ProfileScreen} />
					<Route path="/appointment" component={AppointmentScreen} />

					<Route path="/health" component={HealthScreen} />
					<Route path="/personal" component={PersonalScreen} />
					<Route path="/" exact component={Home} />
				</Container>
			</main>
			<Footer />
		</BrowserRouter>
	)
}

export default App
