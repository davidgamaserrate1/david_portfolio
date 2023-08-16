import React from "react";
import { useNavigate } from "react-router-dom";
import './nextPage-styles.css'


const ChangePage = (props) => {
    const navigate = useNavigate()

    const goToPage = (link) => {
        navigate(link)
    }
    const isNext = props.next ? true : false
    return (
        (isNext ? (
        <div onClick={() => { goToPage(props.link) }} className="nextPage">
            <span className="material-symbols-outlined icon">expand_more</span>
        </div>
        ) : (
            <div onClick={() => { goToPage(props.link) }} className="prevPage">
            <span className="material-symbols-outlined icon">expand_less</span>
        </div>))

    )
}

export default ChangePage