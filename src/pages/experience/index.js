import BodyComponent from '../../components/bodyComponent'
import ChangePage from '../../components/changePage'
import ExperienceDescription from '../../components/experience_description'
import './experience-styles.css'

const Experience = ()=>{
    return(
        <BodyComponent>
             <h4>Experiências</h4>     
            <ChangePage next={false} link={'/skills'}/>
                <div className='experience_description'> 
                    <ExperienceDescription 
                        tittle={'EOS System (Estágiario)'}
                        period={'10/2020 à 12/2020'}
                        activity_description={'Desenvolvimento Front end, utilizando HTML, CSS e JavaScript'}
                        />
                    <ExperienceDescription 
                        tittle={'Integrati (Estagiário)'}
                        period={'01/2021 à 11/2-21'}
                        activity_description={'Analise, integração e manutenção de sistemas utilizando JavaScript, elaboração de rotinas e processos (procedures) no banco de dados.'}
                        />
                    <ExperienceDescription 
                        tittle={'Grupo Card (Programador I)'}
                        period={'12/2021 (Atual)'}
                        activity_description={'Desenvolvimento de sistemas em JavaScript, HTML e CSS, desenvolvimento de rotinas e processos SQL (jobs e funções PL/SQL Oracle). Desenvolvimento e manutenção de código de sistemas, criação da estrutura de banco de dados e codificação de programas, seguindo as especificações, normas, padrões e prazos estabelecidos, análise de requisitos e elaboração de projetos lógico e físico'}
                        />
                </div>            
            <ChangePage next={true} link={'/projects'}/>
        </BodyComponent>
    )
}

export default Experience