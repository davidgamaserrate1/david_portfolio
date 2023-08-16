import {  Route,Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../pages/home";
import AboutMe from "../pages/aboutMe";
import Skills from "../pages/skills";
import Experience from "../pages/experience";

const RoutesApp = ()=>{
    return(
    <BrowserRouter>
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="/about" element={<AboutMe/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/experience" element={<Experience/>}/>
        </Routes>
    </BrowserRouter>
    
    )
}
export default RoutesApp
