// src/pages/auth/SignupPage.jsx
import React from "react";
import SignupForm from "../../components/auth/SignupForm.jsx";
import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-2xl grid md:grid-cols-2 gap-4 items-center">
        <div className="hidden md:block">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="mt-2 text-gray-600">Choose your role and sign up.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <SignupForm />
          <p className="mt-4 text-sm">Already have account? <Link to="/login" className="text-blue-600">Login</Link></p>
        </div>
      </div>
    </div>
  );
}
