const api_url = "http://localhost:5000/api/auth";


const request = async (
    url,
    method = "GET",
    data = null,
    token = null
) => {

    const response = await fetch(url,{
        method,

        headers:{
            "Content-Type":"application/json",

            ...(token && {
                Authorization:`Bearer ${token}`
            })
        },

        body:data
            ? JSON.stringify(data)
            : undefined
    });

    return await response.json();
};


// Register
const register = (data)=>
    request(
        `${api_url}/register`,
        "POST",
        data
    );


// Login
const login = (data)=>
    request(
        `${api_url}/login`,
        "POST",
        data
    );


// Profile
const profile = ()=>{

    const token =
    localStorage.getItem("token");

    return request(
        `${api_url}/profile`,
        "GET",
        null,
        token
    );
};