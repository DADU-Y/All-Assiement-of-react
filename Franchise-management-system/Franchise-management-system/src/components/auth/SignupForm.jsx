
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig.jsx";
import { useNavigate } from "react-router-dom";


function saveRole(uid, role) {
  try {
    const raw = localStorage.getItem("role_map");
    const map = raw ? JSON.parse(raw) : {};
    map[uid] = role;
    localStorage.setItem("role_map", JSON.stringify(map));
  } catch (err) {
    console.error("saveRole failed", err);
  }
}

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User"); 
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInfo("");
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      saveRole(cred.user.uid, role);
      setInfo("Account created. Redirecting to login...");
      setTimeout(() => navigate("/login"), 800);
    } catch (err) {
      console.error(err);
      setInfo(err.message || "Signup failed");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
      {info && <div className="mb-2 text-sm text-gray-700">{info}</div>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="w-full border p-2 rounded" />
        <input required type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password (min 6)" className="w-full border p-2 rounded" />
        <select value={role} onChange={(e)=>setRole(e.target.value)} className="w-full border p-2 rounded">
          <option value="User">User (Customer)</option>
          <option value="Manager">Branch Manager</option>
          <option value="Admin">Admin (Head Office)</option>
        </select>
        <button className="w-full bg-green-600 text-white py-2 rounded">Sign Up</button>
      </form>
    </div>
  );
}
