
import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig.jsx";

function getStoredRole(uid) {
  try {
    const raw = localStorage.getItem("role_map");
    if (!raw) return null;
    const map = JSON.parse(raw);
    return map?.[uid] || null;
  } catch {
    return null;
  }
}

export default function ProtectedRoute({ children, allowedRole }) {
  const user = auth.currentUser;
  if (!user) return <Navigate to="/login" replace />;

  const role = getStoredRole(user.uid);

  if (!allowedRole) return children; 

  const allowed = Array.isArray(allowedRole) ? allowedRole : [allowedRole];

 
  if (allowed.map(a => a.toLowerCase()).includes((role || "").toLowerCase())) {
    return children;
  }

  
  if (role === "Admin") return <Navigate to="/admin" replace />;
  if (role === "Manager") return <Navigate to="/manager" replace />;
  if (role === "User") return <Navigate to="/user" replace />;

  return <Navigate to="/login" replace />;
}
