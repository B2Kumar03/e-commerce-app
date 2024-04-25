import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext/AuthProvider'
import { Navigate, useNavigate } from 'react-router-dom'

const PrivateRouter = ({children}) => {
    const {auth}=useContext(AuthContext)
    const navigate=useNavigate()
    if(auth){
     return <>
     {children}
     </>
    }
     else{
        return <Navigate to='/login'/>

     }
    
 
}

export default PrivateRouter