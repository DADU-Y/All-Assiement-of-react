// src/pages/manager/EmployeeManagement.jsx
import React, { useState } from "react";
import Header from "../../components/common/Header.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";
import EmployeeForm from "../../components/forms/EmployeeForm.jsx";

/* static branch employees */
const initialBranch = { id:1, name:"Lahore Branch", employees: [{id:1,name:"Ali",contact:"0300-123",email:"ali@b.com"}] };

export default function EmployeeManagement() {
  const [branch, setBranch] = useState(initialBranch);

  function addEmployee(emp) {
    setBranch(b => ({ ...b, employees: [...(b.employees || []), { id: Date.now(), ...emp }] }));
  }

  function removeEmp(id) {
    setBranch(b => ({ ...b, employees: b.employees.filter(e => e.id !== id) }));
  }

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar role="Manager" />
        <main className="flex-1 p-6 bg-gray-50 min-h-screen">
          <h1 className="text-2xl font-semibold mb-4">Employee Management</h1>
          <EmployeeForm onSubmit={addEmployee} />
          <div className="mt-4">
            {(branch.employees || []).map(emp => (
              <div key={emp.id} className="border p-3 rounded mb-2 flex justify-between">
                <div>
                  <div className="font-medium">{emp.name}</div>
                  <div className="text-sm">{emp.contact} — {emp.email}</div>
                </div>
                <button onClick={()=>removeEmp(emp.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
