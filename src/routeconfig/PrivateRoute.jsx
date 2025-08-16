import { Navigate } from "react-router-dom";

export const AuthRoute=({children})=>{
    const istoken=sessionStorage.getItem("token");
    return istoken?children:<Navigate to="/login" />
}