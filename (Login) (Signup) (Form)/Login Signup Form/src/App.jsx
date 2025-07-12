import React, { useState } from 'react'
import LoginScreen from './Screens/Login/LoginScreen'
import SignupScreen from './Screens/Signup/SignupScreen'


const App = () => {
  const [isLogin,SetisLogin] = useState(false);

  const switchtologin = () =>{
    SetisLogin(true);
  }

  const switchtosignup = () =>{
    SetisLogin(false);
  }
  return (
  <>
 {
  isLogin ? (
    <LoginScreen switchtosignup={switchtosignup}/>
  ) : (
    <SignupScreen switchtologin={switchtologin}/>
  )
 }
  </>
  )
}

export default App
