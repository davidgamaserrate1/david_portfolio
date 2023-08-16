import React from "react";
import BodyComponent from "../../components/bodyComponent";
import ChangePage from "../../components/changePage";
import './skills-styles.css'
import Skill from "../../components/Skill";
import { Button } from "@chakra-ui/react";

import cvPdf from '../../assets/CV David Serrate.pdf'

const mySkills =[
    {
        src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" , 
        name:"HTML" ,
        value:80
    },
    {
        src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" , 
        name:"CSS" ,
        value:75
    },
    {
        src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" , 
        name:"JavaScript" ,
        value:70
    },
    {
        src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" , 
        name:"ReactJS" ,
        value:85
    },
    {
        src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" , 
        name:"NodeJS" ,
        value:65
    },
    {
        src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" , 
        name:"SQL" ,
        value:90
    },
]
const Skills = ()=>{
    return(
        <BodyComponent>
            <ChangePage next={false} link="/about"/>
            <h3>SKILLS</h3>             
            <div className="skills_container">             
                {mySkills.map((item, index)=>(                
                    <Skill key={index} src={item.src} name={item.name} value={item.value} />                 
                ))}
            </div>
            
            <a href={cvPdf} download>
                <Button style={{background :'#425AAF',color:'#fff', display:'flex', justifyContent:'center', alignItems:'center', margin:'16px auto'}}>
                    Download CV <span class="material-symbols-outlined">download</span> 
                </Button>
            </a>
            
            <ChangePage next={true} link="/experience"/>

        </BodyComponent>
    )
}

export default Skills