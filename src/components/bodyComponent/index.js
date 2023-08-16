import React  from "react"; 
import './body-styles.css'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
   

const BodyComponent = (props)=> {
    return(
        <>
         <div className="header_redirects">
                <Breadcrumb fontWeight='sm' fontSize='sm'  spacing='4px'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/about'>Sobre Mim</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem >
                    <BreadcrumbLink href='/skills'>Skills</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem >
                    <BreadcrumbLink href='/experience'>Experiências</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem >
                    <BreadcrumbLink href='/projetcts'>Projetos</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem >
                    <BreadcrumbLink href='/contact'>Contato</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
         </div>
        <div className="body">
            {props.children}
        </div>    
         
        </>
    )
}


export default BodyComponent