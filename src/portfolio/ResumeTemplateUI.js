import React from "react";
import "../portfolio/ResumeTemplate.css";
import Avatar from "./assets/imgs/avatar.jpg"
import CopyIcon from "./assets/imgs/icons/copy.svg"
import { Modal } from  "./components/Modal"
import { ProjectDetail } from  "./components/ProjectDetail"

function ResumeTemplateUI( {
    isPortfolio,
    changeContent,
    searchedProjects,
    printParams,
    onSearchOptionsChange,
    languages,
    socialNetworks,
    technologies,
    learning,
    cleanSearchParams,
    redirectToPortfolio,
    searchParams,
    content,
    changeToLanguage,
    contactOnClick, 
    showModal,
    currentProjectDetail,
    showProjectDetail,
    closeModal
} ){

    return (
        <React.Fragment>
            <header >
                <article className="bg-header-bar page-content-margin">
                    
                    
                    <div className="content-layout pt-8">
                        
                        
                        <div className="avatar-layout">
                            <img src={ Avatar } alt="avatar" className="avatar"/>
                        </div>

                        <div className="cv-data color-third">
                            <div className="cv-name fs-3 bolder text-center">
                                Victor Rivas
                            </div>
                            <div className="cv-role fs-2 bold pt-2 text-center">
                               
                                <div>{ content.role}</div>
                                
                            </div>
                            <div className="cv-languages fs-1 bold pt-4 d-flex justify-content-center align-items-center gap-4">
                                {
                                    languages.map( ( language, index ) => {
                                        return <div
                                        key={`languages-${ index }`}
                                        className={`language-banner d-flex gap-2 ${ language.isActive ? 'active': ''}`}
                                        onClick={ () => {
                                            changeToLanguage( language.tag )
                                        }}
                                        >   
                                            <div
                                                className="d-flex justify-content-center alig-items-center"
                                            >
                                                <img 
                                                src={language.image} 
                                                alt={ `${ language.name } banner` } 
                                                
                                                />
                                            </div>
                                            <div
                                                className="text-center pt-2"
                                            >
                                                { language.name }
                                            </div>
                                        </div>   
                                    })
                                }
                                <div>
                                
                                </div>
                            </div>
                            
                        </div>
                        <div className="d-flex align-items-center flex-column gap-4">
                            <div className="d-flex justify-content-around align-items-center gap-4 pt-4">
                                {
                                    socialNetworks.map( ( socialNetwork, index ) =>{
                                        return <div
                                        key={`social-network-${ index }`}
                                        className="social-network"
                                        >   
                                            <a 
                                                href={ socialNetwork.url }
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <img src={ socialNetwork.image } alt={ `${ socialNetwork.name} logo`} />
                                            </a>
                                        </div>
                                    })
                                }

                            </div>
                            <div className="d-flex justify-content-around align-items-center ">
                                <a 
                                        
                                href={`mailto:${content.contactMail}`} 
                                target="_blank" 
                                rel="noreferrer"
                                onClick={ ( e ) => {
                                    contactOnClick( e.currentTarget )
                                }}
                                
                                >
                                    <button className="btn header-btn bold"> 
                                        { content.contactText} 
                                    </button>
                                </a>
                                <div
                                    className="position-absolute z-index-negative-1 gap-1 bold fs-6 contact-mail d-flex justify-content-center align-items-center default-transition opacity-0"
                                    
                                    >
                                        <span>
                                            { content.contactMail}
                                        </span> 
                                        <span>
                                            <img src={CopyIcon} alt={ `${CopyIcon} icon`}/>                                            
                                        </span>
                                    </div>
                            </div>
                        </div>

                    </div>
                </article>
            </header>
            <aside className="d-flex pt-10 page-content-margin nav-section">
                <nav className="d-flex justify-content-around align-items-center gap-8">
                    <button 
                    className="btn btn-gray btn-nav bold fs-6 active"
                    
                    onClick={ ( e ) => {
                        changeContent( 'portfolio', e.currentTarget )
                    }}
                    >
                        { content.menuTexts.home }
                    </button>
                    <button 
                    className="btn btn-gray btn-nav bold fs-6"
                    onClick={ ( e ) => {
                        changeContent( 'home', e.currentTarget )
                    }}
                    >
                        { content.menuTexts.portfolio }
                    </button>
                </nav>
            </aside>
            <section className="main page-content-margin">

                <div hidden={!isPortfolio}>
                    
                    <div className="applaying-position-layout pt-10" hidden>
                        <div className="d-flex flex-column-small align-items-center gap-4">
                            <span className="fs-2 bolder color-main">Posición a la que estoy aplicando</span>
                            <span className="fs-4 color-fourth">Desarrollador Frontend</span>
                        </div>
                        <div className="color-main fs-4 pt-4">
                            Backend | Frontend | Vue, 
                            Javascript, Laravel, PHP, 
                            MySQL
                        </div>
                    </div>

                    <div className="content-layout gap-8 pt-4">
                        <article className="about-me">
                            <h3 className="fs-2 bolder color-main">
                                { content.about.title }
                            </h3>
                            <div className="color-main fs-5">
                                {
                                    content.about.content.map( ( paragraph, index ) => {
                                        return (
                                            <p
                                            key={`about-paragraph-${index}`}
                                            >
                                                { paragraph }
                                            </p>
                                        )
                                    })
                                }
                                <div className="d-flex justify-content-center">
                                    <a 
                                    
                                    href={`mailto:${content.contactMail}`} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    onClick={ ( e ) => {
                                        contactOnClick( e.currentTarget )
                                    }}
                                    
                                    >
                                        <button
                                        className="btn bold fs-6"
                                        >
                                            { content.contactText} 
                                        </button>
                                        
                                    </a>
                                    <div
                                    className="position-absolute z-index-negative-1 gap-1 bold fs-6 contact-mail d-flex justify-content-center align-items-center default-transition opacity-0"
                                    
                                    >
                                        <span>
                                            { content.contactMail}
                                        </span> 
                                        <span>
                                            <img src={CopyIcon} alt={ `${CopyIcon} icon`}/>                                            
                                        </span>
                                    </div>
                                </div>
                                
                            </div>
                        </article>

                        <article>
                            <h3 className="fs-2 bolder color-main">
                                { content.experience.title}
                            </h3>
                            <div className="color-main fs-5">

                                <ul>
                                    {
                                        content.experience.content.map( ( paragraph, index ) => {
                                            return (
                                                <li
                                                key={`experience-paragraph ${index}`}
                                                >
                                                    { paragraph }
                                                </li>
                                            )
                                        })
                                    }
                                    
                                </ul>
                            </div>
                        </article>

                        <article>
                            <h3 className="fs-2 bolder color-main text-center">
                                { content.siteSubTitles.technologies }
                            </h3>
                            <div className="technologies-layout color-third gap-8">
                                {
                                    technologies.map( (technology, index) => {
                                        return <div
                                            key={`technologies-${ index }`}
                                            className="technology"
                                            name="technology-param"
                                            value={technology.name}
                                            onClick={ (e) => {
                                                const [ name, value ] = cleanSearchParams( e.currentTarget.attributes.name.value, e.currentTarget.attributes.value.value)
                                                onSearchOptionsChange( name, value )
                                                redirectToPortfolio()
                                            }}
                                            >
                                            
                                                <div
                                                    className="fs-4 bold text-center"
                                                >{ technology.name }</div>
                                                <div
                                                    className="d-flex justify-content-around pt-4"
                                                > 
                                                    <img src={technology.image} alt={ `${technology.name} logo`}/>
                                                </div>
                                            </div>;
                                    })
                                }
                                
                                <div>

                                </div>
                                
                            </div>
                        </article>

                        <article>
                            <h3 className="fs-2 bolder color-main text-center">
                                { content.siteSubTitles.learning }
                            </h3>
                            <div className="technologies-layout color-third gap-8">
                                {
                                    learning.map( (technology, index) => {
                                        return <div
                                            key={`learning-${ index }`}
                                            className="technology"
                                            name="technology-param"
                                            value={technology.name}
                                            onClick={ (e) => {
                                                const [ name, value ] = cleanSearchParams( e.currentTarget.attributes.name.value, e.currentTarget.attributes.value.value)
                                                onSearchOptionsChange( name, value )
                                                redirectToPortfolio()
                                            }}
                                            >
                                            
                                                <div
                                                    className="fs-4 bold text-center"
                                                >{ technology.name }</div>
                                                <div
                                                    className="d-flex justify-content-around pt-4"
                                                > 
                                                    <img src={technology.image} alt={ `${technology.name} logo`}/>
                                                </div>
                                            </div>;
                                    })
                                }
                                
                                <div>

                                </div>
                                
                            </div>
                        </article>

                    </div>
                
                </div> {/*END Home Content */} 

                <div hidden={isPortfolio} className="portfolio" >
                        <div>
                            <h1
                            className="bolder color-main"
                            >{ content.menuTexts.portfolio }</h1>
                        </div>
                    <div className="portfolio-bar d-flex align-items-center gap-4 pb-8">
                        <div className="search-options d-flex align-items-center gap-4">
                            <div className="search-option">
                                <select 
                                name="technology-param"
                                className="fs-5 back-color-third"
                                onChange={ ( e ) => {
                                    const [ name, value ] = cleanSearchParams( e.currentTarget.name, e.currentTarget.value)
                                    
                                    onSearchOptionsChange( name, value)
                                }}
                                value={searchParams.technology}
                                >
                                    <option value="">
                                        { content.siteSubTitles.technologies }
                                    </option>
                                    {
                                        technologies.map( ( technology, index) => {
                                            return (<option 
                                            key={`search-options-technologies-${ index }`}
                                            value={ technology.name }
                                            >
                                                { technology.name }
                                            </option>)
                                        })
                                    }
                                   
                                </select>

                            </div>
                        </div>
                    </div>
                    <div className="projects-layout color-third gap-8">
                                               
                        {

                            
                            Object.keys( searchedProjects ).length > 0 ? 

                                searchedProjects.map( ( project, index ) => {
                                    return (
                                        <div 
                                        key={`project-${ index }`}
                                        className="project cursor-default">
                                            <div
                                            href={  `${ project.url ? 'http://'+project.url : ''}` }
                                            target="_blank"
                                            rel="noreferrer"
                                            className={ `${ project.url ? '' : 'cursor-default'} d-flex flex-column justify-content-between h-100 ` }
                                            onClick = { () => {
                                                showProjectDetail( index )
                                            }}
                                            >
                                                <div className="fs-4 bold text-center">
                                                    { project.name }
                                                </div>
                                                <div
                                                className="d-flex justify-content-around pt-4"
                                                >
                                                    <img src={ project.image } alt={ project.name + " logo" }/>
                                                </div>
                                                <div className="d-grid d-grid-c-2 gap-2 pt-4 ">
                                                    { 
                                                        project.technologies.map( ( technology, index ) => {
                                                            return(
                                                                <div
                                                                    key={`project-tags-${project.name}-${index}`}
                                                                    className="bold project-tags"
                                                                >
                                                                    {
                                                                        technology
                                                                    }
                                                                </div>
                                                            )
                                                        } )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            : 
                                <div className="no-results color-main d-flex flex-column justify-content-center align-items-center">
                                    <div>
                                        <span className="bold">
                                            Sin resultados para:    
                                        </span> 
                                    </div>
                                    <div className="pt-2">
                                        {
                                            printParams()
                                        }
                                    </div>
                                </div> 
                     
                        }
                        
                    </div>
                </div>{/*END Portfolio Content */} 

            </section>
            <footer>

            </footer>
            {
                showModal &&
                <Modal
                closeModal = { closeModal }
                >
                    <ProjectDetail
                        project = { currentProjectDetail }
                        content = { content }
                        closeModal = { closeModal }
                    />
                </Modal>
            }
            
        </React.Fragment>
    )
}

export { ResumeTemplateUI }