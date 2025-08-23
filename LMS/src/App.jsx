import React from 'react'
import AppRoutes from './routes'
import PageHeader from './components/UI/PageHeader'

export default function App(){
  return (
    <div>
      <PageHeader title="School Management System (Vite + React + Firebase)" />
      <AppRoutes />
    </div>
  )
}