// src/pages/auth/LoginPage.jsx
import React from "react";
import LoginForm from "../../components/auth/LoginForm.jsx";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-2xl grid md:grid-cols-2 gap-4 items-center">
        <div className="hidden md:block">
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="mt-2 text-gray-600">Login to manage your account or place orders.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <LoginForm />
          <p className="mt-4 text-sm">Don't have an account? <Link to="/" className="text-blue-600">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
}
