import React from "react";
import { ResumeTemplateUI } from "./ResumeTemplateUI";
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

        if ([...currentTarget.classList].includes( 'contact-mail')) {

            let sibling = currentTarget
            navigator.clipboard.writeText( sibling.firstChild.innerHTML )
            sibling.firstChild.innerHTML = content.words.copied

            setTimeout(() => {
                sibling.firstChild.innerHTML = content.contactMail
            }, 1000);

        }else{

            currentTarget.firstChild.setAttribute('hidden', true)

            let sibling = currentTarget.nextElementSibling
            sibling.classList.remove('position-absolute')
            sibling.classList.add('opacity-1')
            sibling.classList.remove('opacity-0')
            sibling.classList.remove('z-index-negative-1')

        }
        

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
        document.body.classList.add('overflow-hidden')
    }

    const closeModal = ( e ) => {
        if (e.currentTarget === e.target) {
            setShowModal( false )
            document.body.classList.remove('overflow-hidden')
        }
       
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