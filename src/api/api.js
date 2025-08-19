import axios  from "axios"
let setGlobalLoader;

export const api=axios.create({
baseURL:"https://demoauthapi.ritechpune.com/api"
});


api.interceptors.request.use((config)=>{
  //console.log("Request Sent",config);
  if(setGlobalLoader)
      setGlobalLoader(true);

  const token=sessionStorage.getItem("token");
  if(token){
    config.headers.Authorization=`Bearer ${token}`
  }
return config;
},(err)=>{
  if(setGlobalLoader)
    setGlobalLoader(false);
  return Promise.reject(err);
  }
);

api.interceptors.response.use((resp)=>{
  if(setGlobalLoader)
     setGlobalLoader(false);
  return resp;
},(err)=>{
  if(setGlobalLoader)
     setGlobalLoader(false);
    return Promise.reject(err);
})

export function setLoadingFlag(fn)
{
   setGlobalLoader=fn;
}