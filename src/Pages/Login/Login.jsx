import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png';
import { login,Signup } from '../../Firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif';
const Login = () => {
const [loading,setLoading]=useState(false)
const[SignState,setSignState]=useState("Sign In")
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

const user_auth = async (e)=>{
  e.preventDefault()
  setLoading(true)
  if(SignState==="Sign In"){
    await login(email,password)
  }else{
   await Signup(name,email,password)
  }
  setLoading(false)
}



  return (
    loading?<div className="loading-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
      <h1>{SignState}</h1>
      <form >
        {SignState==="Sign Up" ? <input type="text" placeholder='Your Name' value={name} onChange={(e)=>setName(e.target.value)} /> :<></>}
        <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit' onClick={user_auth}>{SignState}</button>
          <div className="form-help">
            <div className="remember">
            <input type="checkbox" />
            <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
            

          </div>

        
        
        


      </form>
      <div className="form-switch">
        
        {SignState==="Sign Up" ? <p>Already have Account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p> : <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>}

      </div>
      </div>
    </div>
  )
}

export default Login
