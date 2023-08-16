import { Progress } from "@chakra-ui/react";
import './skill-styles.css'

const Skill = (props) =>{
    return(
        <div className="skill">           
            <div className="skill_informations">
                <img className="skill_informations__image" src={props.src} alt="imagem da skill"/>          
                <span  className="skill_informations__name"> {props.name}</span> 
                <span  className="skill_informations__value">{props.value}%</span> 
            </div>
            <Progress value={props.value}  />
        </div>
    )
}

export default Skill