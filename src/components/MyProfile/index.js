import React,{useState,useContext,useEffect}from 'react'
import { Navigate } from 'react-router-dom'
import { store } from '../../App'
import axios from 'axios'

const Myprofile = () => {
    const [token,setToken]=useContext(store)
    const [data,setData]=useState(null)
    useEffect(()=>{
        axios.get("http://localhost:5000/myprofile",{
            headers:{
                "x-token":token
            }
        }).then(res=>setData(res.data)).catch((err)=>console.log(err))
    },[])
    if(!token){
        return  <Navigate to="/login"/>
    }
  return (
    <div> {data &&
        <center>
            <h1>Welocome User:{data.username}</h1>
            <button onClick={()=>setToken(null)}>Logout</button>
        </center>
        }
         
    </div>
  )
}

export default Myprofile