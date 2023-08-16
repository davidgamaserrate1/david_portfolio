import './experience_description-styles.css'


const ExperienceDescription = (props) =>{
    return(
    <div className='experience_item'>
        <div  className='experience_item__tittle'> {props.tittle}</div>
        <div  className='experience_item__description'> {props.activity_description}</div>
        <div  className='experience_item__period'> {props.period}</div>
    </div>        
    )
}

export default ExperienceDescription