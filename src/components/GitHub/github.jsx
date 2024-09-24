import React, { useEffect, useState } from "react";

 export default function GitHub(){
const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://api.github.com/users/adarshdeshp").then(response=>response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },[])

return(
    <div className="text-center m-4 bg-gray-400 text-black p-4 text-3xl rounded-lg m-10">GitHub Followers:{Math.floor(Math.random()*100)}
    <img src={data.avatar_url} alt="Git picture" width={300} className="rounded-lg mt-3"/>
    </div>

)
}