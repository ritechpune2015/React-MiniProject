import axios  from "axios"
export const api=axios.create({
baseURL:"https://demoauthapi.ritechpune.com/api"
});


api.interceptors.request.use((config)=>{
  console.log("Request Sent",config);
  const token=sessionStorage.getItem("token");
  if(token){
    config.headers.Authorization=`Bearer ${token}`
  }
   return config;
});
