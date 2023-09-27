import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
function Login(){
    const navigate=useNavigate();
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("")
    const handleLogin=(event)=>{
        event.preventDefault();
        if(userName==="fullstack" && password==="developer")
        {
        localStorage.setItem("loggedin",true)
        navigate('/profile')
        setMessage("");
        }
        else{
            setMessage("Please check the credentials!")
        }

    }

    return(
        <div className="container mt-5">
            <div className="card w-50 mx-auto bg-warning">
                <div className="card-header text-center"><b>Login</b></div>
                <div className="card-body ">
                     <h3>Username</h3>
                     <input type="text"
                     name='userName'
                      value={userName}
                      onChange={(event)=>setUserName(event.target.value)}
                     />
                    <br/>
            
                   <h3>Password</h3>
                   <input 
                   type="password"
                   name='password'
                   value={password}
                   onChange={(event)=>setPassword(event.target.value)}
                   />
                   <div>{password}</div>
                  <br/>
                  <br/>
                  <button className="btn btn-primary" onClick={(event)=>handleLogin(event)}>Login</button>
                  <div>{message}</div>
                  
                    <div>Username : fullstack</div>
                    <div>password : developer</div>
                
                 
            </div>
            </div>
        </div>
    )
}
export default Login;
