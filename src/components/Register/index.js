import axios from 'axios'
import React,{useState} from 'react'

const Register = () => {
    const [data,setData]=useState({
        username:'',
        email:'',
        password:'',
        conformpassword:''
    })
    const{username,email,password,conformpassword}=data
const changeHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
}
 

const submitHandler=(e)=>{
e.preventDefault();
axios.post("http://localhost:5000/register",data).then(
    (res)=>alert(res.data)
     
)
console.log(data)
}

  return (
    <div>
        <center> 
        <form onSubmit={submitHandler}>
            <h3>Resgister Form</h3>
            <input type="text" name="username" placeholder='User Name' 
            value={username} onChange={changeHandler}/><br/>
            <input type="email" name="email" placeholder='User email'
             value={email} onChange={changeHandler}/><br/>
            <input type="password" name="password" placeholder='password'
             value={password} onChange={changeHandler}/><br/>
            <input type="password" name="conformpassword" placeholder='conformpasswod' 
            value={conformpassword}onChange={changeHandler}/><br/>
            <input type="submit" value="Register"/><br/>
        </form>
        </center>
    </div>
  )
}

export default Register