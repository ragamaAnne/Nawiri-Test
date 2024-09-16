import React from 'react';
import SignInForm from '../components/SignInForm';
import Footer from '../components/Footer';
import Header from '../components/Header';

const SignIn = () => {
  return (
    <div>
      <Header/>
      <SignInForm />
      <Footer />
    </div>
  );
};

export default SignIn;
