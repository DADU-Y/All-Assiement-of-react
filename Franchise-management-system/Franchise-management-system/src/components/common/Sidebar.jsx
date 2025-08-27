
import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ role }) {

  return (
    <aside className="w-64 bg-white border-r p-4 min-h-[calc(100vh-64px)]">
      <nav className="flex flex-col gap-2">
        <Link to={role === "Admin" ? "/admin" : role === "Manager" ? "/manager" : "/user"} className="font-medium">Dashboard</Link>

        {role === "Admin" && (
          <>
            <Link to="/admin/branches">Branches</Link>
            <Link to="/admin/products">Products</Link>
            <Link to="/admin/inventory">Inventory</Link>
            <Link to="/admin/employees">Employees</Link>
          </>
        )}

        {role === "Manager" && (
          <>
            <Link to="/manager/inventory">Branch Inventory</Link>
            <Link to="/manager/employees">Employees</Link>
          </>
        )}

        {role === "User" && (
          <>
            <Link to="/products">Products</Link>
            <Link to="/order">Place Order</Link>
            <Link to="/review">Write Review</Link>
          </>
        )}
      </nav>
    </aside>
  );
}
