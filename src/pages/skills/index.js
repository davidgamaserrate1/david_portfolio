import React from "react";
import BodyComponent from "../../components/bodyComponent";
import ChangePage from "../../components/changePage";
import './skills-styles.css'
import Skill from "../../components/Skill";
const Skills = ()=>{
    return(
        <BodyComponent>
            <ChangePage next={false}/>
            <h3>Skills</h3>             
            <div className="skills_container">
             
             <Skill/>
             <Skill/>
             <Skill/>

            </div>

            <ChangePage next={true} link="experience"/>

        </BodyComponent>
    )
}

export default Skills