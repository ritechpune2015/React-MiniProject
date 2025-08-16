import {AuthProvider} from "../auth/authcontext"
import { Login } from "../pages/login"
import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../pages/dashboard"
import { Registration } from "../pages/registration"
import { MainLayout } from "../common/MainLayout"
import {ProductList} from "../pages/products/productlist"
import {CustomerList} from "../pages/customer/customerlist"
import { AuthRoute } from "./PrivateRoute"
export function RouteConfig()
{
    return(<>
     <AuthProvider>
    
         <Routes>
           <Route path="/" element={<Login />}></Route>
             <Route path="/login" element={<Login />}></Route>

                            <Route path="/register" element={<Registration />}></Route>


              <Route element={<MainLayout />}>
               <Route path="/dashboard" element={<AuthRoute><Dashboard /></AuthRoute>}></Route>
               <Route path="/customers" element={<AuthRoute><CustomerList /></AuthRoute>}></Route>

               <Route path="/products" element={<AuthRoute><ProductList /></AuthRoute>}></Route>

               </Route>

         </Routes>
        
       </AuthProvider>
    </>);
}