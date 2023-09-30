import React from 'react';
import { NavLink,Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile(){

    const navLinkStyle=({isActive})=>{
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'Red' : 'Black',
            textDecoration: isActive ? 'none' : 'underline'
        }
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
                      <NavLink style={navLinkStyle} to="project">Projects</NavLink>
                    </li>
                    <li className="nav-item p-2">
                      <NavLink style={navLinkStyle} to="https://drive.google.com/file/d/1XL8dA85j-ufwPcssYipJhTmNmxZ3aFDo/view?usp=drive_link">Download Resume</NavLink>
                    </li>
                    </ul>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}
export default Profile;
