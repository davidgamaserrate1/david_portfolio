import React from "react";
import BodyComponent from "../../components/bodyComponent";
import PictureModule from "../../components/pictureModule";
import Information from "../../components/information";
import './home-styles.css'

const Home = ()=>{
    return(
    <BodyComponent>
        <PictureModule/>        
        <div className="informations">
            <Information  information="David Serrate"/>
            <Information  information="Full stack developer"/>
            <Information  information="Campo grande, MS"/>
        </div>
    </BodyComponent>
    )
    
}

export default Home 