import { Progress } from "@chakra-ui/react";
import './skill-styles.css'
const Skill = (props) =>{
    return(
        <div className="skill">           
            <div className="skill_informations">
                <img className="skill_informations__image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />          
                <span  className="skill_informations__name"> HTML</span> 
                <span  className="skill_informations__value">80%</span> 
            </div>
            <Progress value={80}  />
        </div>
    )
}

export default Skill