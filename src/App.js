import React,{createContext,useState}from 'react'
import { BrowserRouter,Routes as Switch,Route } from 'react-router-dom'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Myprofile from './components/MyProfile'

export const store=createContext()

const App = () => {
  const [token,setToken]=useState(null)
  return (
    <store.Provider value={[token,setToken]}> 
     <BrowserRouter> 
     
        <Navbar/>
        <Switch>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          
          <Route path="/myprofile" element={<Myprofile/>}/>
        </Switch>
       
       
        </BrowserRouter>
        </store.Provider>
  )
}

export default App