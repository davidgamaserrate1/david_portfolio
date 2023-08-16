import React from "react";
import BodyComponent from "../../components/bodyComponent";
import ChangePage from "../../components/changePage";
import './aboutMe-styles.css'

const AboutMe = ()=>{
    return(
        <BodyComponent>
            <ChangePage link="/" next={false}/>
            <h2>Sobre mim</h2>

            <p className="aboutMe_text">
                Sou um desenvolvedor full stack, formado em engenharia de software pela universidade 
                Federal de Mato Grosso do Sul, com vasta experiência na criação e desenvolvimento de 
                sistemas web. Possuo conhecimento sólido em tecnologias como React, Node.js e SQL Oracle. 
                Minha habilidade em utilizar essas tecnologias permite-me construir aplicações web eficientes e escaláveis.
                Tenho paixão por explorar novas ferramentas e frameworks, o que me permite acompanhar as tendências e inovações do mundo 
                do desenvolvimento web. Estou sempre em busca de desafios estimulantes e oportunidades para aplicar meu conhecimento e habilidades
                em projetos que impulsionem o crescimento e a eficiência das soluções web.
            </p>

            <ChangePage link="/skills" next={true}/>                
        </BodyComponent>
         
    )
}

export default AboutMe