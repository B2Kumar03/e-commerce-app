import React, { createContext, useEffect, useState } from 'react'
export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const [cart,setCart]=useState(0)
    const [token, setToken] = useState(null);
    const [auth,setAuth]=useState(false)
    function setCartM(){
      const data = JSON.parse(localStorage.getItem("cartData")) || [];
      setCart(data.length)
    }
    function login(t){
        setToken(t)
        setAuth((prev)=>!prev)
    }
    function logout(){
      setToken("")
      setAuth((prev)=>!prev)
    }
   
  return (
    <AuthContext.Provider value={{cart,setCartM,login,auth,logout}} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider