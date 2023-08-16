import React from "react";
import BodyComponent from "../../components/bodyComponent";
import PictureModule from "../../components/pictureModule";
import Information from "../../components/information";
import ChangePage from "../../components/changePage"; 
import './home-styles.css'

const Home = ()=>{
    return(
    <div className="fade-in-element">     
        <BodyComponent>
            <PictureModule/>        
            <div className="informations">
                <Information  information="David Serrate"/>
                <Information  information="Full stack developer"/>
                <Information  information="Campo grande, MS"/>
            </div>
            <ChangePage link="about" next={true} />
        </BodyComponent>
    </div>
    )
    
}

export default Home 