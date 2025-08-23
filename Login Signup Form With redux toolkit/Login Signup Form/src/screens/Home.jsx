import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../redux/authSlice.jsx";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig.jsx";

const Home = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    dispatch(clearUser());
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-4">Welcome {user?.email || "Guest"}!</h1>
      {user ? (
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      ) : (
        <button onClick={() => navigate("/login")} className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
      )}
    </div>
  );
};

export default Home;
