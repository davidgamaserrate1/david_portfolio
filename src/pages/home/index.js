import React from "react";
import BodyComponent from "../../components/bodyComponent";
import PictureModule from "../../components/pictureModule";
import Information from "../../components/information";

const Home = ()=>{
    return(
    <BodyComponent>
        <PictureModule/>        
        <Information information="David Serrate"/>
    </BodyComponent>
    )
    
}

export default Home 