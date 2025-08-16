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
       <div className="row">
         <div className="offset-3 col-4">
 <div className="card mt-5">
     <div className="card-header">
<h2> Login </h2>
     </div>
   <div className="card-body">
 
    <form onSubmit={handleSubmit}>
       <div>
        <label>Email ID</label>
       <div>
            <input className="form-control" type="text" onChange={(e)=>setEmail(e.target.value)} />
        </div>
       </div>
       <div>
        <label>Password</label>
        <div>
            <input className="form-control"  type="password"  onChange={(e)=>setPassword(e.target.value)}/>
        </div>
       </div>
       <div className="mt-3">
        <button className="btn btn-danger"> Login </button>
        <br></br>
        <Link to="/register"> New User Registration</Link>
       </div>
    </form>
     </div>
   </div>
         </div>
       </div>
    </>);
}