import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
 function Protect (props){
    const navigate=useNavigate();
    const {Component}=props;
    useEffect(()=>{
        const status=localStorage.getItem("loggedin")
        if(!status){
            navigate('/login')
        }
    },[]);

    return(
        <div>
            <Component/>
        </div>
    )
 }
 export default Protect;
