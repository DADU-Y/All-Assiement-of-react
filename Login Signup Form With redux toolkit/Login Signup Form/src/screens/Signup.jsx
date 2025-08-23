import React from "react";
import AuthForm from "../components/AuthForm.jsx";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig.jsx";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice.jsx";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(setUser(userCredential.user));
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return <AuthForm onSubmit={handleSignup} isLogin={false} />;
};

export default Signup;
