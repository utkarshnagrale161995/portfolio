import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    // const navLinkStyle=({isActive})=>{
    //     return{
    //         fontWeight: isActive ? 'bold' : 'normal',
    //         color: isActive ? 'Red' : 'Black',
    //         textDecoration: isActive ? 'none' : 'underline'
    //     }
    // }

    return(
    
    //     <nav className="navbar navbar-expand-sm navbar-light bg-warning">
    //         &nbsp;&nbsp;&nbsp;&nbsp;
    //        <NavLink className="navbar-brand text-dark" to="/"><b>
    //         <span></span>
    //         Utkarsh.WebDev</b></NavLink>
    //           <button 
    //           className="navbar-toggler"  
    //           type="button" 
    //           data-toggle="collapse" 
    //           data-target="#navbarNavDropdown"
    //           aria-controls="navbarNavDropdown" 
    //           aria-expanded="false" 
    //           aria-label="Toggle navigation"
    //           >
    //             <span className="navbar-toggler-icon"></span>
    //           </button>

    //         <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
    //          <ul className="nav navbar-nav">
    //             <li className="nav-item p-2 active">
    //                 <NavLink className="nav-link" style={navLinkStyle} to="/">Home</NavLink>
    //             </li>

    //             <li className="nav-item p-2">
    //                 <NavLink className="nav-link" style={navLinkStyle} to="/about">About</NavLink>
    //             </li>

    //             <li className="nav-item p-2">
    //                <NavLink className="nav-link" style={navLinkStyle} to="/profile">Profile</NavLink>
    //             </li>
               
    //             <li className="nav-item p-2">
    //                 <NavLink className="nav-link" style={navLinkStyle} to="/contact">Contact</NavLink>
    //             </li>
    //         </ul>
    //       </div>
    //     </nav>
    // 
    <Navbar className="navbar navbar-expand-sm navbar-light bg-warning" expand="lg">
            <Navbar.Brand href="/" className="navbar-brand test-dark m-2"><b>Utkarsh.WebDev</b></Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse className='collapse navbar-collapse justify-content-end' id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="/"><b>Home</b></Nav.Link>
                    <Nav.Link href="/about"><b>About</b></Nav.Link>
                    <Nav.Link href="/profile"><b>Profile</b></Nav.Link>
                    
                    <Nav.Link href="/newcontact"><b>Contact</b></Nav.Link>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
    )
}
export default Header;
