import { useState } from "react";

import {
    register,
    login,
    profile
}
from "../services/auth.services";


const useAuth = ()=>{

const [user,setUser] =
useState(null);

const [loading,setLoading] =
useState(false);

const [error,setError] =
useState(null);


// Register
const handleRegister =
async(data)=>{

try{

setLoading(true);

const response =
await register(data);

return response;

}catch(error){

setError(error.message);

}finally{

setLoading(false);

}

};


// Login
const handleLogin =
async(data)=>{

try{

setLoading(true);

const response =
await login(data);

if(response.token){

localStorage.setItem(
"token",
response.token
);

}

return response;

}catch(error){

setError(error.message);

}finally{

setLoading(false);

}

};


// Profile
const getProfile =
async()=>{

try{

setLoading(true);

const data =
await profile();

setUser(data);

}catch(error){

setError(error.message);

}finally{

setLoading(false);

}

};


// Logout
const logout = ()=>{

localStorage.removeItem(
"token"
);

setUser(null);

};


return{

user,
loading,
error,

handleRegister,
handleLogin,
getProfile,
logout

};

};

export default useAuth;