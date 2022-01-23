import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import './css/blooddrop.css'
import { Container } from 'react-bootstrap';
import HistoryPage from './pages/HistoryPage';
import DonationPage from './pages/DonationPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'
import MapsPage from './pages/MapsPage'
import HomePage from './pages/HomePage'

class App extends React.Component {
  render() {
    return (
      <Container className='App'>
        <Router>
          <Switch>
            <Route exact path='/' component={LoginPage}></Route>
            <Route exact path='/register' component={RegisterPage}></Route>
            <Route exact path='/forgotPassword' component={ForgotPasswordPage}></Route>
            <Route exact path='/donor' component={HomePage}></Route>
            <Route exact path='/donor/history' component={HistoryPage}></Route>
            <Route exact path='/donor/donation' component={DonationPage}></Route>
            <Route exact path='/donor/location' component={MapsPage}></Route>
          </Switch>
        </Router>
        {/* <MapsPage></MapsPage> */}
        {/* <DonationPage></DonationPage> */}
        {/* <ForgotPasswordPage></ForgotPasswordPage> */}
        {/* <LoginPage></LoginPage> */}
        {/* <RegisterPage></RegisterPage> */}
        {/* <HistoryPage></HistoryPage> */}
      </Container>
      // <Router>
      //   <Switch>
      //     <Route exact path='/' component={LoginPage}>
      //     </Route>
      //   </Switch>
      // </Router>
    );
  }
}

export default App;
