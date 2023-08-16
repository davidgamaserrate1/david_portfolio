import {  Route,Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../pages/home";
import AboutMe from "../pages/aboutMe";
import Skills from "../pages/skills";

const RoutesApp = ()=>{
    return(
    <BrowserRouter>
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="/about" element={<AboutMe/>}/>
            <Route path="/skills" element={<Skills/>}/>
        </Routes>
    </BrowserRouter>
    
    )
}
export default RoutesApp
