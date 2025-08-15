import { AuthProvider } from "./auth/authcontext"
import "./app.css"
import { Login } from "./pages/login"
import { Route, Routes } from "react-router-dom"
import { Dashboard } from "./pages/dashboard"
import { Registration } from "./pages/registration"
function App() {
  

  return (
       <AuthProvider>
         <Routes>
           <Route path="/" element={<Login />}></Route>
             <Route path="/login" element={<Login />}></Route>
               <Route path="/dashboard" element={<Dashboard />}></Route>
               <Route path="/register" element={<Registration />}></Route>
         </Routes>
         
       </AuthProvider>
  )
}

export default App
