import { Outlet,Link } from "react-router-dom";
import { AuthContext } from "../auth/authcontext";
import { useContext } from "react";

export function MainLayout()
{
     const {userName,logout}=useContext(AuthContext);
    const handleClick=()=>{
        logout();
    }

    return(<>
      <div className="container-fluid">
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">RI-TECH</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/dashboard" className="nav-link" href="#">Home <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link to="/products" className="nav-link" href="#">Products</Link>
      </li>
      <li className="nav-item">
        <Link to="/customers" className="nav-link" href="#">Customers</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={handleClick}>Logout</a>
      </li>
    </ul>
     <span className="bg-dark text-white">Hi! {userName}</span>
  </div>
       </nav>
      </div>
      <div className="container">
      <div className="row">
         <div className="col-12">
               <Outlet />
         </div>
      </div>
      </div>
    </>);
}