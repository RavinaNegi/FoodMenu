import  { useState } from "react";
import { useEffect } from "react";

const IsOnline=()=>
{
    const [onlineStatus,setOnlineStatus]=useState(true);
    useEffect(()=>{
        window.addEventListener("online", (event) => {
            setOnlineStatus(true);
        });
        window.addEventListener("offline", (event) => {
            setOnlineStatus(false);
        });


    },[]
        
    )
    return onlineStatus;
}
export default IsOnline;