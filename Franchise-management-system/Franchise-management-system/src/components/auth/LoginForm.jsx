
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig.jsx";
import { useNavigate } from "react-router-dom";

function getRoleForUid(uid) {
  try {
    const raw = localStorage.getItem("role_map");
    if (!raw) return null;
    const map = JSON.parse(raw);
    return map?.[uid] || null;
  } catch { return null; }
}

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const role = getRoleForUid(cred.user.uid);
   
      if (role === "Admin") navigate("/admin");
      else if (role === "Manager") navigate("/manager");
      else navigate("/user");
    } catch (error) {
      console.error(error);
      setErr(error.code || "Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      {err && <div className="text-red-500 mb-2">{err}</div>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="w-full border p-2 rounded" />
        <input required type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="w-full border p-2 rounded" />
        <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
}
