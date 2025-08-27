
import React, { useState } from "react";
import Header from "../../components/common/Header.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";


const initialBranch = { id:1, name:"Lahore Branch", inventory: { chicken:50, fries:80 } };

export default function BranchInventory() {
  const [branch, setBranch] = useState(initialBranch);

  function addStock(item, qty) {
    setBranch(b => ({ ...b, inventory: { ...b.inventory, [item]: (b.inventory[item] || 0) + qty } }));
  }

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar role="Manager" />
        <main className="flex-1 p-6 bg-gray-50 min-h-screen">
          <h1 className="text-2xl font-semibold mb-4">{branch.name} Inventory</h1>
          <pre className="bg-white p-4 rounded border">{JSON.stringify(branch.inventory, null, 2)}</pre>
          <div className="mt-3">
            <button onClick={()=>addStock("fries",10)} className="bg-blue-600 text-white px-3 py-1 rounded">Add 10 Fries</button>
          </div>
        </main>
      </div>
    </div>
  );
}
