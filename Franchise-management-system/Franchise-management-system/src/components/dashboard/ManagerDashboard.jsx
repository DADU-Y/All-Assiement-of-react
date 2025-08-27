// src/components/dashboard/ManagerDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ManagerDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Manager Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/manager/inventory" className="bg-white p-4 rounded shadow">Branch Inventory</Link>
        <Link to="/manager/employees" className="bg-white p-4 rounded shadow">Employees</Link>
      </div>
    </div>
  );
}
