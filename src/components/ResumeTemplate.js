import React from "react";
import "../styles/ResumeTemplate.css";
import Avatar from "../resources/imgs/avatar.jpg"
import JavascriptLogo from "../resources/imgs/logos/JavaScript-logo.svg"
import VueLogo from "../resources/imgs/logos/Vue-logo.svg"
import PHPLogo from "../resources/imgs/logos/PHP-logo.svg"
import LaravelLogo from "../resources/imgs/logos/Laravel-logo.svg"
import MySQLLogo from "../resources/imgs/logos/MySQL-logo.svg"
import CSSLogo from "../resources/imgs/logos/CSS-logo.svg"
import HTMLLogo from "../resources/imgs/logos/HTML-logo.svg"
import JQueryLogo from "../resources/imgs/logos/JQuery-logo.svg"
import TailwindLogo from "../resources/imgs/logos/Tailwind-logo.svg"
import VuetifyLogo from "../resources/imgs/logos/Vuetify-logo.svg"
import GitLogo from "../resources/imgs/logos/Git-logo.svg"
import BootstrapLogo from "../resources/imgs/logos/Bootstrap-logo.svg"
import NuxtLogo from "../resources/imgs/logos/Nuxt-logo.svg"
import VuexLogo from "../resources/imgs/logos/Vuex-logo.png"
// import AxiosLogo from "../resources/imgs/logos/Axios-logo.svg"
import TypescriptLogo from "../resources/imgs/logos/Typescript-logo.svg"
import ReactLogo from "../resources/imgs/logos/React-logo.svg"

import LinkedInLogo from "../resources/imgs/logos/LinkedIn-logo.svg"
import TwitterLogo from "../resources/imgs/logos/Twitter-logo.svg"
//import InstagramLogo from "../resources/imgs/logos/Instagram-logo.svg"

import USABanner from "../resources/imgs/logos/USA-banner.svg"
import SpainBanner from "../resources/imgs/logos/Spain-banner.svg"




function ResumeTemplate( props )
{   

    const [ isPortfolio, setIsPortfolio ] = React.useState( true );

    const changeContent = ( currentContent ) => {

        switch (currentContent) {
            case 'portfolio':
                setIsPortfolio( true )
                break;

            case 'home':
            default:
                setIsPortfolio( false )
                break;
        }
        
    }

    const projects = [
        {
            name: 'Gettfort C.A.',
            image: JavascriptLogo,
            domain: 'gettfort.com',
            url: 'gettfort.com',
            technologies: [
                'HTML',
                'CSS',
                'JavaScript',
                'PHP',
                'MySQL'
            ]
        },
        {
            name: 'Filtros Rámirez',
            image: VueLogo,
            domain: '',
            url: '',
            technologies: [
                'HTML',
                'CSS',
                'JavaScript',
                'PHP',
                'Laravel',
                'MySQL'
            ]
        },
        {
            name: 'Prisma Agencia Creativa Sitio Web',
            image: NuxtLogo,
            domain: 'prismagencia.com',
            url: 'prismagencia.com',
            technologies: [
                'HTML',
                'SASS',
                'TypeScript',
                'Angular',
            ]
        },
        {
            name: 'Prisma Agencia Creativa Sitio Administrador',
            image: NuxtLogo,
            domain: 'prismagencia.com (privado)',
            url: '',
            technologies: [
                'HTML',
                'CSS',
                'Javascript',
                'PHP',
                'Laravel',
                'MySQL'
            ]
        },
        {
            name: 'Qoonter Web App',
            image: VuexLogo,
            domain: 'qoonter.com (Sin publicar aún)',
            url: 'qoonter.com/auth/login',
            technologies: [
                'HTML',
                'CSS',
                'Javascript',
                'Vue',
            ]
        },
        {
            name: 'Fletamos Backend',
            image: PHPLogo,
            domain: 'fletamos.com',
            url: '',
            technologies: [
                'PHP',
                'Laravel',
                'MySQL',
            ]
        },
        {
            name: 'Fletamos Administrador',
            image: LaravelLogo,
            domain: 'fletamos.com (privado)',
            url: '',
            technologies: [
                'PHP',
                'Laravel',
                'MySQL',
            ]
        },
        {
            name: 'Portafolio',
            image: MySQLLogo,
            domain: '(sin publicar)',
            url: '',
            technologies: [
                'HTML',
                'CSS',
                'Javascript',
                'React'
            ]
        },

    ]
    

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
    const onSearchOptionsChange = ( e ) => {
        let newPropData = {}
        let propName = e.target.name.split('-')
        propName.pop()
        propName = propName.join('-')

        if (e.target.value !== '') {    
        
            newPropData[propName.toString()] = e.target.value
            newPropData = Object.assign(  searchParams, newPropData  )

        }else{

            if (searchParams.hasOwnProperty(propName.toString())) {
                delete searchParams[propName.toString()]
                
            }

            newPropData = searchParams

        }
        console.log(newPropData)
        setSearchParams( newPropData )
        portfolioSearch( newPropData )
        
    }

    const portfolioSearch = ( searchParams ) => {
        
        if ( Object.keys(searchParams).length === 0 ) {
            setSearchedProjects( projects )   
            
        }else{
            
            
            const filteredProjects = projects.filter( ( project ) => {
                return project.technologies.includes(searchParams.technology)
            })
            
            setSearchedProjects( filteredProjects ) 
        }
        
    }
    
    /* const removeEmptyProperties = ( object ) => {
        
        const properties = []
        for( const index in object ) {
            if ( object[index] !== '' ) {
                properties.push(object[index])
            }
            
        }
        
        return properties
    }*/

    

    const languages = [
        {
            name: 'Español',
            image: SpainBanner,
        },
        {
            name: 'English',
            image: USABanner,
        },
    ]

    const socialNetworks = [
        {
            name: 'Linkedin',
            image: LinkedInLogo,
            url: 'https://www.linkedin.com/in/victor24/'
        },
        {
            name: 'Twitter',
            image: TwitterLogo,
            url: 'https://twitter.com/VictorRSDevelop'
        },
    ]

    const technologies = [
        {
            name: 'JavaScript',
            image: JavascriptLogo,
        },
        {
            name: 'Vue.js',
            image: VueLogo,
        },
        {
            name: 'Nuxt',
            image: NuxtLogo,
        },
        {
            name: 'Vuex',
            image: VuexLogo,
        },
        {
            name: 'PHP',
            image: PHPLogo,
        },
        {
            name: 'Laravel',
            image: LaravelLogo,
        },
        {
            name: 'MySQL',
            image: MySQLLogo,
        },
        
        {
            name: 'CSS',
            image: CSSLogo,
        },
        {
            name: 'HTML',
            image: HTMLLogo,
        },
        {
            name: 'JQuery',
            image: JQueryLogo,
        },
        {
            name: 'Tailwind',
            image: TailwindLogo,
        },
        {
            name: 'Vuetify',
            image: VuetifyLogo,
        },
        {
            name: 'Bootstrap',
            image: BootstrapLogo,
        },
        {
            name: 'Git',
            image: GitLogo,
        },
        

    ];

    const learning = [
        {
            name: 'Typescript',
            image: TypescriptLogo,
        },
        {
            name: 'React',
            image: ReactLogo,
        },
    ]
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
                                Web Developer - Fullstack
                            </div>
                            <div className="cv-languages fs-1 bold pt-4 d-flex justify-content-center align-items-center gap-4">
                                <span hidden>Lenguajes:</span> 
                                {
                                    languages.map( ( language, index ) => {
                                        return <div
                                        key={`languages-${ index }`}
                                        className="language-banner d-flex gap-2"
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
                                <button className="btn header-btn bold"> 
                                    Contáctame 
                                </button>
                            </div>
                        </div>

                    </div>
                </article>
            </header>
            <aside className="d-flex pt-10 page-content-margin nav-section">
                <nav className="d-flex justify-content-around align-items-center gap-4">
                    <button 
                    className="btn btn-gray btn-nav bold"
                    onClick={ () => {
                        changeContent( 'portfolio' )
                    }}
                    >
                        CV/Resume 
                    </button>
                    <button 
                    className="btn btn-gray btn-nav bold"
                    onClick={ () => {
                        changeContent( 'home' )
                    }}
                    >
                        Portafolio
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

                    <div className="content-layout gap-5 pt-4">
                        <article>
                            <h3 className="fs-2 bolder color-main">
                                Acerca de mi
                            </h3>
                            <div className="color-main fs-5">
                                Soy un Desarrollador Web Fullstack PHP con 4 años de 
                                experiencia creando Apps Web para la administración de
                                personal, contabilidad e inventario. Busco un puesto
                                como desarrollador  Frontend o Backend, ya que
                                actualmente mis estudios estan enfocados en alcanzar 
                                un mayor nivel de conocimiento en ello.
                            </div>
                        </article>

                        <article>
                            <h3 className="fs-2 bolder color-main">
                                Experiencia en
                            </h3>
                            <div className="color-main fs-5">
                                Soy un Desarrollador Web Fullstack PHP con 4 años de 
                                experiencia creando Apps Web para la administración de
                                personal, contabilidad e inventario. Busco un puesto
                                como desarrollador  Frontend o Backend, ya que
                                actualmente mis estudios estan enfocados en alcanzar 
                                un mayor nivel de conocimiento en ello.
                            </div>
                        </article>

                        <article>
                            <h3 className="fs-2 bolder color-main text-center">
                                Tecnologías
                            </h3>
                            <div className="technologies-layout color-third gap-5">
                                {
                                    technologies.map( (technology, index) => {
                                        return <div
                                            key={`technologies-${ index }`}
                                            className="technology"
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
                                Aprendiendo
                            </h3>
                            <div className="technologies-layout color-third gap-5">
                                {
                                    learning.map( (technology, index) => {
                                        return <div
                                            key={`learning-${ index }`}
                                            className="technology"
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
                            >Portafolio</h1>
                        </div>
                    <div className="portfolio-bar d-flex align-items-center gap-4 pb-8">
                        <div className="search-options d-flex align-items-center gap-4">
                            <div className="search-option">
                                <select 
                                name="technology-param"
                                className="fs-5"
                                onChange={ ( e ) => {
                                    onSearchOptionsChange(e)
                                }}
                                >
                                    <option value="">
                                        Tecnologías
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
                    <div className="projects-layout color-third gap-5">
                                               
                        {

                            
                            Object.keys( searchedProjects ).length > 0 ? 

                                searchedProjects.map( ( project, index ) => {
                                    return (
                                        <div 
                                        key={`project-${ index }`}
                                        className="project">
                                            <div className="fs-4 bold text-center">
                                                { project.name }
                                            </div>
                                            <div
                                            className="d-flex justify-content-around pt-4"
                                            >
                                                <img src={ project.image } alt={ project.name + " logo" }/>
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
        </React.Fragment>
    );
}

export { ResumeTemplate };