import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard(){
  return (
    <div className="container">
      <h3>Dashboard</h3>
      <div className="list-group">
        <Link to="/students" className="list-group-item list-group-item-action">Students</Link>
        <Link to="/Teachers" className="list-group-item list-group-item-action">Teachers</Link>
        <Link to="/Schools" className="list-group-item list-group-item-action">Schools</Link>
        <Link to="/Syllabus" className="list-group-item list-group-item-action">Syllabus</Link>
        <Link to="/Classes" className="list-group-item list-group-item-action">Classes</Link>
        <Link to="/Fee" className="list-group-item list-group-item-action">Fee</Link>
        <Link to="/Admission" className="list-group-item list-group-item-action">Admission</Link>
        <Link to="/Exams" className="list-group-item list-group-item-action">Exams</Link>
        <Link to="/Subjects" className="list-group-item list-group-item-action">Subjects</Link>
      </div>
    </div>
  )
}