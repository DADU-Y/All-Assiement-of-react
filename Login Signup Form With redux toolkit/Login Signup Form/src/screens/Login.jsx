import React from "react";
import AuthForm from "../components/AuthForm.jsx";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig.jsx";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(userCredential.user));
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return <AuthForm onSubmit={handleLogin} isLogin={true} />;
};

export default Login;
