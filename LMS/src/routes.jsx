import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import StudentList from './pages/Students/StudentList'
import StudentForm from './pages/Students/StudentForm'
import Signup from "./pages/Auth/Signup";
import TeacherList from './pages/Teachers/TeachersList'
import TeacherForm from './pages/Teachers/TeachersForm'
import SchoolList from './pages/Schools/SchoolsList'
import SchoolForm from './pages/Schools/SchoolsForm'
import SyllabusList from './pages/Syllabus/SyllabusList'
import SyllabusForm from './pages/Syllabus/SyllabusForm'
import ClassesList from './pages/Classes/ClassesList'
import ClassesForm from './pages/Classes/ClassesForm'
import FeeList from './pages/Fees/FeeList'
import FeeForm from './pages/Fees/FeeForm'
import AdmissionList from './pages/Admission/AdmissionList'
import AdmissionForm from './pages/Admission/AdmissionForm'
import ExamsList from './pages/Exams/ExamsList'
import ExamsForm from './pages/Exams/ExamsForm'
import SubjectsList from './pages/Subjects/SubjectsList'
import SubjectsForm from './pages/Subjects/SubjectsForm'

// Simple auth guard using localStorage uid (replace with proper auth state)
const PrivateRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem('uid')
  return isLoggedIn ? children : <Navigate to="/login" replace />
}

export default function AppRoutes(){
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      <Route path="/students" element={<PrivateRoute><StudentList/></PrivateRoute>} />
      <Route path="/students/new" element={<PrivateRoute><StudentForm/></PrivateRoute>} />
      <Route path="/students/:id/edit" element={<PrivateRoute><StudentForm/></PrivateRoute>} />

      <Route path="/Teachers" element={<PrivateRoute><TeacherList/></PrivateRoute>} />
      <Route path="/Teachers/new" element={<PrivateRoute><TeacherForm/></PrivateRoute>} />
      <Route path="/Teachers/:id/edit" element={<PrivateRoute><TeacherForm/></PrivateRoute>} />

      <Route path="/Schools" element={<PrivateRoute><SchoolList/></PrivateRoute>} />
      <Route path="/Schools/new" element={<PrivateRoute><SchoolForm/></PrivateRoute>} />
      <Route path="/Schools/:id/edit" element={<PrivateRoute><SchoolForm/></PrivateRoute>} />

      <Route path="/Syllabus" element={<PrivateRoute><SyllabusList/></PrivateRoute>} />
      <Route path="/Syllabus/new" element={<PrivateRoute><SyllabusForm/></PrivateRoute>} />
      <Route path="/Syllabus/:id/edit" element={<PrivateRoute><SyllabusForm/></PrivateRoute>} />

      <Route path="/Classes" element={<PrivateRoute><ClassesList/></PrivateRoute>} />
      <Route path="/Classes/new" element={<PrivateRoute><ClassesForm/></PrivateRoute>} />
      <Route path="/Classes/:id/edit" element={<PrivateRoute><ClassesForm/></PrivateRoute>} />

      <Route path="/Fee" element={<PrivateRoute><FeeList/></PrivateRoute>} />
      <Route path="/Fee/new" element={<PrivateRoute><FeeForm/></PrivateRoute>} />
      <Route path="/Fee/:id/edit" element={<PrivateRoute><FeeForm/></PrivateRoute>} />

      <Route path="/Admission" element={<PrivateRoute><AdmissionList/></PrivateRoute>} />
      <Route path="/Admission/new" element={<PrivateRoute><AdmissionForm/></PrivateRoute>} />
      <Route path="/Admission/:id/edit" element={<PrivateRoute><AdmissionForm/></PrivateRoute>} />

      <Route path="/Exams" element={<PrivateRoute><ExamsList/></PrivateRoute>} />
      <Route path="/Exams/new" element={<PrivateRoute><ExamsForm/></PrivateRoute>} />
      <Route path="/Exams/:id/edit" element={<PrivateRoute><ExamsForm/></PrivateRoute>} />

      <Route path="/Subjects" element={<PrivateRoute><SubjectsList/></PrivateRoute>} />
      <Route path="/Subjects/new" element={<PrivateRoute><SubjectsForm/></PrivateRoute>} />
      <Route path="/Subjects/:id/edit" element={<PrivateRoute><SubjectsForm/></PrivateRoute>} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}