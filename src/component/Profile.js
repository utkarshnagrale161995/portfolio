import React from 'react';
import { NavLink,Outlet,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile(){
    const navigate=useNavigate();
    const navLinkStyle=({isActive})=>{
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'Red' : 'Black',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }

    const handleLogout=()=>{
        localStorage.removeItem("loggedin");
        navigate('/')
    }

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <ul className="navbar-nav">
                    <li className='nav-item p-2'>
                      <NavLink style={navLinkStyle}  to="academic" >Academic</NavLink>
                    </li>
                    <li className="nav-item p-2">
                      <NavLink style={navLinkStyle} to="professional">Professional</NavLink>
                    </li>
                    <li className="nav-item p-2">
                      <NavLink style={navLinkStyle} to="certification">Certification</NavLink>
                    </li>
                    <li className="nav-item p-2">
                      <NavLink style={navLinkStyle} to="project">Project</NavLink>
                    </li>
                    <li className="nav-item p-2">
                       <button className="btn btn-danger" onClick={handleLogout}>LogOut</button>
                    </li>
                    </ul>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}
export default Profile;
