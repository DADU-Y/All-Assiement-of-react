
import React, { useState } from "react";

export default function BranchForm({ initial = { name: "", location: "" }, onSubmit }) {
  const [form, setForm] = useState(initial);
  const submit = (e) => { e.preventDefault(); onSubmit(form); setForm({ name: "", location: "" }); };
  return (
    <form onSubmit={submit} className="flex gap-2">
      <input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="border p-2 rounded" placeholder="Branch name" />
      <input required value={form.location} onChange={(e)=>setForm({...form,location:e.target.value})} className="border p-2 rounded" placeholder="Location" />
      <button className="bg-green-600 text-white px-3 rounded">Add</button>
    </form>
  );
}
