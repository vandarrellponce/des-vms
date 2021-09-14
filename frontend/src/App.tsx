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
import { PassThrough } from 'stream'
import PasscodeScreen from './screens/PasscodeScreen'
import VisitorLogin from './screens/VisitorLogin'
import UpcommingVisitorsScreen from './screens/UpcommingVisitorsScreen'
import RecentVisitorsScreen from './screens/RecentVisitorsScreen'
import SubHeader from './components/SubHeader/SubHeader'

const App = () => {
  const { userInfo } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authUser())
  }, [])

  return (
    <div style={{ backgroundColor: '#fafafa', height: '100vh' }}>
      <BrowserRouter>
        <Header />
        <SubHeader />
        <main className="py-3">
          <Container>
            {/* <Route path="/fillup" component={FillupScreen} /> */}
            <Route path="/recent" component={RecentVisitorsScreen} />
            <Route path="/upcomming" component={UpcommingVisitorsScreen} />
            <Route path="/visitorlogin" component={VisitorLogin} />
            <Route path="/login" exact component={LoginScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/meetings/:meetingId" component={PasscodeScreen} />
            <Route path="/appointment" component={AppointmentScreen} />

            <Route path="/health" component={HealthScreen} />
            <Route path="/personal" component={PersonalScreen} />
            <Route path="/" exact component={Home} />
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
