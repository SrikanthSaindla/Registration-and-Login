import axios from 'axios'
import React,{useState,useContext} from 'react'
import { Navigate } from 'react-router-dom'
import { store } from '../../App'

const Login = () => {
    const[token,setToken]=useContext(store)
    const [data,setData]=useState({
         
        email:'',
        password:'',
         
    })
    const{ email,password,}=data
const changeHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
}
 

const submitHandler=(e)=>{
e.preventDefault();
axios.post("http://localhost:5000/login",data).then(
    (res)=>setToken(res.data.token)
     
)
 
 
}
if(token){
    return <Navigate to="/myprofile"/> 
}
  return (
    <div>
        <center> 
        <form onSubmit={submitHandler}>
            <h3>Login Form</h3>
             
            <input type="email" name="email" placeholder='User email'
             value={email} onChange={changeHandler}/><br/>
            <input type="password" name="password" placeholder='password'
             value={password} onChange={changeHandler}/><br/>
             <input type="submit" value="Login"/><br/>
             
        </form>
        </center>
    </div>
  )
}

export default Login