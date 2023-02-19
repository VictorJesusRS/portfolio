import React from "react";
import { ResumeTemplateUI } from "./ResumeTemplateUI";

// import JavascriptLogo from "../resources/imgs/logos/JavaScript-logo.svg"
// import VueLogo from "../resources/imgs/logos/Vue-logo.svg"
// import PHPLogo from "../resources/imgs/logos/PHP-logo.svg"
// import LaravelLogo from "../resources/imgs/logos/Laravel-logo.svg"
// import MySQLLogo from "../resources/imgs/logos/MySQL-logo.svg"
// import CSSLogo from "../resources/imgs/logos/CSS-logo.svg"
// import HTMLLogo from "../resources/imgs/logos/HTML-logo.svg"
// import JQueryLogo from "../resources/imgs/logos/JQuery-logo.svg"
// import TailwindLogo from "../resources/imgs/logos/Tailwind-logo.svg"
// import VuetifyLogo from "../resources/imgs/logos/Vuetify-logo.svg"
// import GitLogo from "../resources/imgs/logos/Git-logo.svg"
// import BootstrapLogo from "../resources/imgs/logos/Bootstrap-logo.svg"
// import NuxtLogo from "../resources/imgs/logos/Nuxt-logo.svg"
// import VuexLogo from "../resources/imgs/logos/Vuex-logo.png"
// // import AxiosLogo from "../resources/imgs/logos/Axios-logo.svg"
// import TypescriptLogo from "../resources/imgs/logos/Typescript-logo.svg"
// import ReactLogo from "../resources/imgs/logos/React-logo.svg"

// import LinkedInLogo from "../resources/imgs/logos/LinkedIn-logo.svg"
// import TwitterLogo from "../resources/imgs/logos/Twitter-logo.svg"
// //import InstagramLogo from "../resources/imgs/logos/Instagram-logo.svg"

// import USABanner from "../resources/imgs/logos/USA-banner.svg"
// import SpainBanner from "../resources/imgs/logos/Spain-banner.svg"


import { spanishContent } from "./data/languagues/spanish"
import { englishContent } from "./data/languagues/english"

import { neutralContent } from "./data/content/neutral"

function ResumeTemplate( props )
{   
    
    const changeToLanguage = ( language ) => {
        languages.forEach(anotherLanguage => {
            anotherLanguage.isActive = false
        });

        switch ( language ) {
            case 'spanish':
                setContent( spanishContent )
                setProjects( spanishContent.projects )
                spanishContent.languages.map( language => {
                    language.isActive = true
                    return language
                })
                
                setLanguages( spanishContent.languages )
                setSearchedProjects( spanishContent.projects )

                break;
            case 'english':
            default:
                setContent( englishContent )
                setProjects( englishContent.projects )
                englishContent.languages.map( language => {
                    language.isActive = true
                    return language
                })
                setLanguages( englishContent.languages )
                setSearchedProjects( englishContent.projects )

                    break;
    
        }
        console.log('aaa')
        portfolioSearch( searchParams )
        
    }

    const defaultContentLanguague = () => {
        let content = {}
        if (/^es\b/.test(navigator.language)) {
           
            spanishContent.languages.map( language => {
                if (language.tag === 'spanish') {
                    language.isActive = true
                }else{
                    language.isActive = false
                }
                return language
            })
            content = spanishContent
        }else{
            
            englishContent.languages.map( language => {
                if (language.tag === 'english') {
                    language.isActive = true
                }else{
                    language.isActive = false
                }
                return language
            })
            content = englishContent
        }

        return content
    };
    
    const [ content, setContent ] = React.useState( defaultContentLanguague() )
    //const content = contentByLanguague()
    const [ projects, setProjects ] = React.useState( content.projects )
    //const projects = content.projects
    const [ languages, setLanguages ] = React.useState( content.languages )
    //const languages = content.languages
    

    const socialNetworks = neutralContent.socialNetworks
    const technologies = neutralContent.technologies
    const learning = neutralContent.learning

    const [ isPortfolio, setIsPortfolio ] = React.useState( true );

    const changeContent = ( currentContent, currentTarget ) => {
        let menuItems = []
        switch (currentContent) {
            case 'portfolio':
                setIsPortfolio( true )
                menuItems = document.querySelectorAll('aside.nav-section nav .btn-nav')
                menuItems.forEach( item =>{
                    item.classList.remove('active')
                })
                currentTarget.classList.add('active')
                
                break;

            case 'home':
            default:
                setIsPortfolio( false )
                menuItems = document.querySelectorAll('aside.nav-section nav .btn-nav')
                menuItems.forEach( item =>{
                    item.classList.remove('active')
                })
                currentTarget.classList.add('active')
                portfolioSearch( searchParams )
                break;

        }

       
        
    } 

    const [ searchParams, setSearchParams] = React.useState({})
    const [ searchedProjects, setSearchedProjects ] = React.useState(projects)
    const printParams = () => {
        const searchedParams = []
        let count = 0
        
        for (const index in searchParams) {            
                searchedParams.push(<span key={`searched-params-${count++}`} className="color-main">{searchParams[index]}</span>)
        }
        
        return searchedParams
    }
    const onSearchOptionsChange = ( propName, value ) => {
        
        let newPropData = {}

        if (value !== '') {    
        
            newPropData[propName.toString()] = value
            newPropData = Object.assign(  searchParams, newPropData  )

        }else{

            if (searchParams.hasOwnProperty(propName.toString())) {
                delete searchParams[propName.toString()]
                
            }

            newPropData = searchParams

        }

        setSearchParams( newPropData )
        portfolioSearch( newPropData )
        
    }

    const portfolioSearch = React.useCallback( ( searchParams ) => {
        
            if ( Object.keys(searchParams).length === 0 ) {
                setSearchedProjects( projects )   
            }else{
                
                const filteredProjects = projects.filter( ( project ) => {
                    return project.technologies.includes(searchParams.technology)
                })
                
                setSearchedProjects( filteredProjects ) 
            }
            
        }
    , [projects])

    const cleanSearchParams = ( name, value) => {

        name = name.split('-')
        name.pop()
        name = name.join('-')

        return [ name, value]
    }

    const redirectToPortfolio = () => {
        setIsPortfolio(false)
    }

    const contactOnClick = ( currentTarget ) => {
        //currentTarget.firstChild.innerHTML = mail
         currentTarget.firstChild.setAttribute('hidden', true)
        // currentTarget.children[1].classList.add('opacity-1')
        // currentTarget.children[1].classList.remove('opacity-0')
        let sibling = currentTarget.nextElementSibling
        sibling.classList.remove('position-absolute')
        sibling.classList.add('opacity-1')
        sibling.classList.remove('opacity-0')
        sibling.classList.remove('z-index-negative-1')
        navigator.clipboard.writeText( sibling.firstChild.innerHTML )
    }

    React.useEffect( () => {
        portfolioSearch( searchParams )
    }, [ languages, searchParams, portfolioSearch ])

    const [ showModal, setShowModal ] = React.useState(false)
    const [ currentProjectDetail, setCurrentProjectDetail ] = React.useState({})

    console.log( showModal )
    const showProjectDetail = ( index ) => {
        setCurrentProjectDetail( projects[ index ] )
        setShowModal( true )
    }

    const closeModal = () => {
        setShowModal( false )
    }
    
    return (
        <ResumeTemplateUI
            isPortfolio={ isPortfolio }
            changeContent= { changeContent }
            searchedProjects= { searchedProjects }
            printParams= { printParams } 
            onSearchOptionsChange= { onSearchOptionsChange }
            languages= { languages }
            socialNetworks= { socialNetworks }
            technologies= { technologies }
            learning= { learning }
            cleanSearchParams = { cleanSearchParams }
            redirectToPortfolio = { redirectToPortfolio }
            searchParams= { searchParams }
            content= { content }
            changeToLanguage= { changeToLanguage }
            contactOnClick = { contactOnClick }
            showModal = { showModal }
            currentProjectDetail = { currentProjectDetail }
            showProjectDetail = { showProjectDetail }
            closeModal = { closeModal }
        />
    );
}

export { ResumeTemplate };