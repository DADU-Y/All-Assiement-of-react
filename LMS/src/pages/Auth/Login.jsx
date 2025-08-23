import React from 'react'
import { useForm } from 'react-hook-form'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const onSubmit = async data => {
    try {
      const res = await signInWithEmailAndPassword(auth, data.email, data.password)
      localStorage.setItem('uid', res.user.uid)
      navigate('/')
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h3>Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input className="form-control" placeholder="Email" {...register('email',{required:true})} />
            </div>
            <div className="mb-3">
              <input className="form-control" type="password" placeholder="Password" {...register('password',{required:true})} />
            </div>
            <button className="btn btn-primary">Login</button>
            <p>Don’t have an account? <a href="/signup">Sign Up</a></p>
          </form>
        </div>
      </div>
    </div>
  )
}