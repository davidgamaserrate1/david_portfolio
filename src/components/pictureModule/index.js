import React from "react";
import './picture-styles.css'
import  profilePicture from '../../assets/profile.jpg'

const PictureModule = ()=>{
    return(
        <div className="picture_module">
            <img className="picuter_module__picture" src={profilePicture}/>
        </div>
    )
}

export default PictureModule