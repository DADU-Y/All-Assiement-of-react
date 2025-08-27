
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig.jsx";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-lg">Franchise Management</div>
      <div className="flex items-center gap-3">
        {auth.currentUser && <div className="text-sm">{auth.currentUser.email}</div>}
        {auth.currentUser ? (
          <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
        ) : null}
      </div>
    </header>
  );
}
