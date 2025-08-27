// src/pages/admin/InventoryManagement.jsx
import React, { useState } from "react";
import Header from "../../components/common/Header.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";

/* static branches inventory */
const products = [
  "chicken",
  "fries",
  "burger",
  "pizza",
  "nuggets",
  "drinks",
  "sandwich",
  "wings",
  "shawarma",
  "salad",
];

const initialBranches = [
  {
    id: 1,
    name: "Lahore Branch",
    inventory: {
      chicken: 50,
      fries: 80,
      burger: 30,
      pizza: 20,
      nuggets: 40,
      drinks: 100,
      sandwich: 25,
      wings: 35,
      shawarma: 15,
      salad: 10,
    },
  },
  {
    id: 2,
    name: "Karachi Branch",
    inventory: {
      chicken: 40,
      fries: 60,
      burger: 20,
      pizza: 15,
      nuggets: 30,
      drinks: 90,
      sandwich: 20,
      wings: 30,
      shawarma: 10,
      salad: 5,
    },
  },
];

export default function InventoryManagement() {
  const [branches, setBranches] = useState(initialBranches);

  function addStock(branchId, item, qty) {
    setBranches(prev =>
      prev.map(b => {
        if (b.id !== branchId) return b;
        return {
          ...b,
          inventory: { ...b.inventory, [item]: (b.inventory[item] || 0) + qty },
        };
      })
    );
  }

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar role="Admin" />
        <main className="flex-1 p-6 bg-gray-50 min-h-screen">
          <h1 className="text-2xl font-semibold mb-4">Inventory Management</h1>
          {branches.map(b => (
            <div key={b.id} className="border p-4 rounded mb-4 shadow bg-white">
              <div className="font-bold text-lg">{b.name}</div>
              <div className="mt-3 text-gray-700">
                Inventory:
                <ul className="ml-4 list-disc">
                  {Object.entries(b.inventory).map(([item, qty]) => (
                    <li key={item}>
                      {item}: <span className="font-semibold">{qty}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex gap-3 flex-wrap">
                {products.map(product => (
                  <button
                    key={product}
                    onClick={() => addStock(b.id, product, 5)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm"
                  >
                    Add 5 {product.charAt(0).toUpperCase() + product.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
