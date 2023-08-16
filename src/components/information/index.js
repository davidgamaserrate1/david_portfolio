import React from "react";
import './information-styles.css'

const Information = (props)=>{
    return(
        <div className="information">
            {props.information}
        </div>
    )
}

export default Information