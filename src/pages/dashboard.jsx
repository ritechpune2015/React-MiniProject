import { AuthContext } from "../auth/authcontext";
import { useContext } from "react";
export function Dashboard(){
    const {userName,logout}=useContext(AuthContext);
    const handleClick=()=>{
        logout();
    }
return(<>
    <h1> Dashboard </h1>
    <h2> Welcome ! {userName} <button type="button" onClick={handleClick}>Logout</button></h2>
    </>);
}