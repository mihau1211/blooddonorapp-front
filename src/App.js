import React from 'react';
import './App.css';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import DonationForm from './forms/DonationForm';
import ForgotPassword from './forms/ForgotPassword';
import { Container } from 'react-bootstrap';
import TitleBar from './bars/TitleBar';

class App extends React.Component {
  render() {
    return (
      <Container className="App">
        {/* <LoginForm></LoginForm> */}
        {/* <RegisterForm></RegisterForm> */}
        {/* <DonationForm></DonationForm> */}
        {/* <ForgotPassword></ForgotPassword> */}
        <TitleBar></TitleBar>
      </Container>
    );
  }
}

export default App;
