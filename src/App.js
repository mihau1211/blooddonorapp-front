import React from 'react';
import './App.css';
import './css/blooddrop.css'
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import DonationForm from './forms/DonationForm';
import ForgotPassword from './forms/ForgotPassword';
import { Container } from 'react-bootstrap';
import TitleBar from './bars/TitleBar';
import HomePage from './pages/HomePage';
import BloodDropBar from './bars/BloodDropBar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

class App extends React.Component {
  render() {
    return (
      <Container className='App'>
        {/* <LoginForm></LoginForm> */}
        {/* <RegisterForm></RegisterForm> */}
        {/* <DonationForm></DonationForm> */}
        {/* <ForgotPassword></ForgotPassword> */}
        {/* <TitleBar></TitleBar> */}
        <HomePage></HomePage>
        {/* <BloodDropBar></BloodDropBar> */}
        {/* <LoginPage></LoginPage> */}
        {/* <RegisterPage></RegisterPage> */}
        {/* <ForgotPasswordPage></ForgotPasswordPage> */}
      </Container>
    );
  }
}

export default App;
