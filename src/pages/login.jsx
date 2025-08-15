import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/authcontext";

export function Login()
{
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const {login} =useContext(AuthContext);

   const handleSubmit=async (e)=>{
       e.preventDefault();
      await login(email,password);
   }
    return(<>
    <h2> Login </h2>
    <form onSubmit={handleSubmit}>
       <div>
        <label>Email ID</label>
       <div>
            <input type="text" onChange={(e)=>setEmail(e.target.value)} />
        </div>
       </div>
       <div>
        <label>Password</label>
        <div>
            <input type="password"  onChange={(e)=>setPassword(e.target.value)}/>
        </div>
       </div>
       <div>
        <button> Login </button>
        <Link to="/register"> Registration</Link>
       </div>
    </form>
    </>);
}