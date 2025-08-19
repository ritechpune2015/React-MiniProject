import {  createContext, useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";
export const AuthContext=createContext();

export const AuthProvider=({children})=>{
 const navigate=useNavigate();
 const [userName,setUserName]=useState(null);
 const [token,setToken] =useState(null);
 const login=async(email,password)=>{
      
    await api.post("/Accounts/Login",{emailID:email,password:password}).then((res)=>{
         console.log(res);
      if(res.data.isLoggedIn)
      {
        sessionStorage.setItem("userName",res.data.fullName);
        sessionStorage.setItem("token",res.data.token);
        setUserName(res.data.fullName);
        setToken(res.data.token);
       // alert("Logged In");
        navigate("/dashboard");
      }
      else
      {
        alert("Invalid EmailID or Password!")
      }
      }).catch(err=>{
        alert(JSON.stringify(err));
        if(err.response.status==401)
        {
            alert("Invalid Email ID or Password!");
        }
        else
        {
            alert(JSON.stringify(err));
        }
      });
  }

const registration=async (data)=>{
  await api.post("/Accounts/register",data).then((resp)=>{
    alert("Registration Successfull!");
    navigate("/login");
  }).catch((err)=>{
     alert(JSON.stringify(err));
  });
}

const logout=(data)=>{
    sessionStorage.clear();
    setUserName(null);
    setToken(null);
    alert("Logged Out Successfully!");
    navigate("/login");
}
 return(<AuthContext.Provider value={{userName,login,registration,logout}}>
       {children}    
    </AuthContext.Provider>);
}