import React, { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase'
import { DataGrid } from '@mui/x-data-grid'
import { useNavigate } from 'react-router-dom'

export default function TeacherList(){
  const [Teachers, setTeachers] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    const unsub = onSnapshot(collection(db,'Teachers'), snapshot=>{
      setTeachers(snapshot.docs.map(doc=>({ id: doc.id, ...doc.data() })))
    })
    return ()=>unsub()
  },[])

  const columns = [
    { field: 'name', headerName: 'Name', width: 220 },
    { field: 'classId', headerName: 'Class', width: 120 },
    { field: 'admissionDate', headerName: 'Admission Date', width: 160 },
    { field: 'status', headerName: 'Status', width: 120 }
  ]

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h4>Teachers</h4>
        <div>
          <button className="btn btn-success me-2" onClick={()=>navigate('/Teachers/new')}>+ Add Teacher</button>
        </div>
      </div>
      <div style={{ height: 500 }}>
        <DataGrid rows={Teachers} columns={columns} pageSize={10} rowsPerPageOptions={[10]} />
      </div>
    </div>
  )
}