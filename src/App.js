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
import InformationPage from './pages/InformationPage'
import AdminMessagePage from './pages/AdminMessagesPage';
import AdminHomePage from './pages/AdminHomePage';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLogged: false,
      user: []
    }
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    })
  }

  loginCallback = async (childData) => {
    await this.setStateAsync({ data: childData })
  }

  render() {
    return (
      <Container className='App'>
        <Router>
          <Switch>
            <Route exact path='/' render={(props) => (
              <LoginPage {...props} loginCallback={this.loginCallback} />)}>
            </Route>
            <Route exact path='/register' component={RegisterPage}></Route>
            <Route exact path='/forgotPassword' component={ForgotPasswordPage}></Route>
            <Route exact path='/donor' render={(props) => (
              <HomePage {...props} data={this.state.data} />
            )}></Route>
            <Route exact path='/donor/history' render={(props) => (
              <HistoryPage {...props} data={this.state.data} />
            )}></Route>
            <Route exact path='/donor/donation' render={(props) => (
              <DonationPage {...props} data={this.state.data} />
            )}></Route>
            <Route exact path='/donor/location' render={(props) => (
              <MapsPage {...props} data={this.state.data} />
            )}></Route>
            <Route exact path='/donor/info' render={(props) => (
              <InformationPage {...props} data={this.state.data} />
            )}></Route>
            <Route exact path='/bloodbank' render={(props) => (
              <AdminHomePage {...props} data={this.state.data} />
            )}></Route>
            <Route exact path='/bloodbank/messages' render={(props) => (
              <AdminMessagePage {...props} data={this.state.data} />
            )}></Route>
          </Switch>
        </Router>
      </Container >
    );
  }
}

export default App;
