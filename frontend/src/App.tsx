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
import FillupScreen from './screens/FillupScreen'

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
					<Route path="/" exact component={FillupScreen} />
				</Container>
			</main>
			<Footer />
		</BrowserRouter>
	)
}

export default App
