// src/components/forms/EmployeeForm.jsx
import React, { useState } from "react";

export default function EmployeeForm({ initial = { name: "", contact: "", email: "" }, onSubmit }) {
  const [form, setForm] = useState(initial);
  const submit = (e) => { e.preventDefault(); onSubmit(form); setForm({ name: "", contact: "", email: "" }); };
  return (
    <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-3 gap-2">
      <input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="border p-2 rounded" placeholder="Name" />
      <input required value={form.contact} onChange={(e)=>setForm({...form,contact:e.target.value})} className="border p-2 rounded" placeholder="Contact" />
      <input required value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} className="border p-2 rounded" placeholder="Email" />
      <button className="bg-blue-600 text-white px-3 py-2 rounded col-span-full">Add Employee</button>
    </form>
  );
}
