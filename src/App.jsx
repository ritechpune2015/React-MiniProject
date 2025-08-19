
import { useEffect, useState } from "react"
import { RouteConfig } from "./routeconfig/RouteConfig"
import {setLoadingFlag} from "./api/api.js"
function App() {
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoadingFlag(setLoading);
  },[]);
  return (
   <>
   {loading && (
        <div className="loader-overlay">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

   <RouteConfig />
   </>   
  )
}

export default App
