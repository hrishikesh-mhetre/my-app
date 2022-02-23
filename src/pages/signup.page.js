import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { signup } from '../services/user.service'
const SignupPage = (props) =>

{

    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
 
    const navigate=useNavigate()


    const onSignup=async()=>{
      if(username.length===0){
          alert('please enter username')
      }else if(password.length===0){
          alert('please enter password')
      }else{
          //sign up API
          const result= await signup(username,password)
          if(result){
                     navigate('/signin')
          }
      }
    }
    return  (
        <div>
        <h1 className="header"> Signup</h1>
        <div className="form">
        <div className="mb-3">
    <label  className="form-label" >Username</label>
    <input 
    onChange={(e)=>
        {
          setUsername(e.target.value)
        }}
    type="text" className="form-control"  />
    </div>

  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input 
    onChange={(e)=>
        {
          setPassword(e.target.value)
        }}
    type="password" className="form-control"  />
    </div>
  
    <div className="mb-3">
        <div>
       Already have an account? Signin <Link to="/signin">here</Link>
        </div>
    <button onClick={onSignup}className="btn btn-success">Signup</button>
  </div>

        </div>
        </div>
    )
       
        
          
}
export default SignupPage
