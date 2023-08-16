import React from "react";
import BodyComponent from "../../components/bodyComponent";
import ChangePage from "../../components/changePage";

const Skills = ()=>{
    return(
        <BodyComponent>
            <ChangePage next={false}/>
            <ChangePage next={true} link="experience"/>

        </BodyComponent>
    )
}

export default Skills