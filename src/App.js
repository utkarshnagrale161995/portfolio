import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Profile from './component/Profile';
import Home from './component/Home';
import Header from './component/Header';
import Professional from './component/Professional';
import Academic from './component/Academic';
import Certification from './component/Certification';
import Project from './component/Project'
import Protect from './component/Protect';
import Login from './component/Login';
import Contact from './component/Contact';
import Newcontact from './component/Newcontact';
import "bootstrap/dist/css/bootstrap.css";
const LazyAbout = React.lazy(()=>import ("./component/About"));

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={ 
          <React.Suspense fallback="Loading...">
            <LazyAbout/>
          </React.Suspense>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Protect Component={Profile}/>}>
           <Route index element={<Academic/>}/>
           <Route path="academic" element={<Academic/>}/>
           <Route path="professional" element={<Professional/>}/>
           <Route path="project" element={<Project/>} />
           <Route path="certification" element={<Certification/>}/>  
        </Route>
       
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/newcontact" element={<Newcontact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

