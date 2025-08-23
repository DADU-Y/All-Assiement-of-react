import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { useNavigate, useParams } from 'react-router-dom'

export default function SyllabusForm(){
  const { register, handleSubmit, reset } = useForm()
  const navigate = useNavigate()
  const params = useParams()
  const id = params.id

  useEffect(()=>{
    if(id){
      (async ()=>{
        const d = await getDoc(doc(db,'Syllabus',id))
        if(d.exists()) reset(d.data())
      })()
    }
  },[id,reset])

  const onSubmit = async data => {
    try {
      if(id){
        await setDoc(doc(db,'Syllabus',id), data, { merge: true })
      } else {
        await addDoc(collection(db,'Syllabus'), { ...data, createdAt: new Date().toISOString() })
      }
      navigate('/Syllabus')
    } catch(e){ alert(e.message) }
  }

  return (
    <div className="container">
      <h4>{id ? 'Edit Syllabus' : 'Add Syllabus'}</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <input className="form-control" placeholder="Full Name" {...register('name',{required:true})} />
        </div>
        <div className="mb-3">
          <label>Date of Birth</label>
          <input className="form-control" type="date" {...register('dob')} />
        </div>
        <div className="mb-3">
          <input className="form-control" placeholder="Class Id" {...register('classId')} />
        </div>
        <div className="mb-3">
          <label>Admission Date</label>
          <input className="form-control" type="date" {...register('admissionDate')} />
        </div>
        <div className="mb-3">
          <select className="form-select" {...register('status')}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  )
}