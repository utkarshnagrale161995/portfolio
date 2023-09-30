import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './component/Profile';
import Home from './component/Home';
import Header from './component/Header';
import Professional from './component/Professional';
import Academic from './component/Academic';
import Certification from './component/Certification';
import Project from './component/Project'
import Newcontact from './component/Newcontact';
import About from './component/About';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile" element={<Profile/>}>
           <Route index element={<Academic/>}/>
           <Route path="academic" element={<Academic/>}/>
           <Route path="professional" element={<Professional/>}/>
           <Route path="project" element={<Project/>} />
           <Route path="certification" element={<Certification/>}/>  
        </Route>
        <Route path="/newcontact" element={<Newcontact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

