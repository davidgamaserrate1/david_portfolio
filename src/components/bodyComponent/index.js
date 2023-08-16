import React  from "react"; 
import './body-styles.css'


const BodyComponent = (props)=> {
    return(
        <div className="body">
            {props.children}
        </div>    
    )
}


export default BodyComponent