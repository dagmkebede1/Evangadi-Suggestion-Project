import React from 'react'
import Login from '../../Pages/LoginPage/Login.js'
import {Navigate} from 'react-router-dom'

//admin _ user, update, 

function ProtectRoute({children}) {
    let user = localStorage.getItem("user");
    // const user = document.cookie

    if (!user) {
    return <Navigate to='/login' replace/>
        // localStorage.setItem("user", "red")
    }else{
        return children
    }
 
  
}

export default ProtectRoute