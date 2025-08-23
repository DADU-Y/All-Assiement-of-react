import React from 'react'

export default function PageHeader({title}) {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container">
        <span className="navbar-brand mb-0 h1">{title}</span>
        <div>
          <button className="btn btn-outline-secondary me-2" onClick={()=>{
            // simple sign out
            localStorage.removeItem('uid'); window.location.href='/login';
          }}>Logout</button>
        </div>
      </div>
    </nav>
  )
}