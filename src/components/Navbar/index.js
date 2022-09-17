import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { store } from '../../App'
 
 
import "./index.css"
 
const Navbar = () => {
    const [token,setToken]=useContext(store)
    
     
  return (
<div>
    {!token &&
         
        
        <ul>
           <Link to="/register"> <li>Register</li></Link>
            <Link to="/login"> <li>Login</li></Link>
        </ul>
     

    }
    </div>
     
  )
}

export default Navbar