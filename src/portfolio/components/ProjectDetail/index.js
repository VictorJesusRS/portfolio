import React from "react";
import "./ProjectDetail.css";

function ProjectDetail ( { 
    project,
    content, 
    closeModal,
}) {

    const [ imagenShowed, setImageShowed ] = React.useState( project.detail.images[0] )

    const changeImagenShowed = ( index ) => {
        setImageShowed( project.detail.images[ index ] )
    }

    return (
        <div className="project-detail">
            <div className="text-center">
                <h2 className="project-name "> { project.name }</h2>
            </div>
            <div className="project-areas ">
                <div className="project-images-area">
                   <div className="project-images-list d-flex flex-column align-items-center gap-4">
                        {
                            project.detail.images.map( ( image, index ) => {
                                return <img 
                                    key={ `project-detail-images-${ index }` }
                                    src={ image } 
                                    alt={ `${project.name} imagen`}
                                    onClick={ () => {
                                        changeImagenShowed( index )
                                    }}
                                />
                            })
                        }

                   </div>
                   <div className="fadding-images">
   
                        <img 
                        className="image-showed"
                        src={ imagenShowed } 
                        alt={ `${project.name} imagen`}
                        />
                        
                   </div>
                </div>
                <div className="project-text-area">
                    <div className="project-detail-domain">
                        <div>
                            <span className="bold">
                            { content.siteSubTitles.domain }:
                            </span>
                        </div>
                        <div className="pt-2 bolder">
                            {
                                project.domain &&
                                <a
                                href={  `${ project.url ? 'http://'+project.url : ''}` }
                                target="_blank"
                                rel="noreferrer"
                                >
                                    { project.domain }
                                </a>
                            }

                            {
                                !project.domain &&
                                <div>
                                    Dominio fuera de línea
                                </div>
                            }
                            
                        </div>
                    </div>
                    
                    <div className="project-description pt-4">
                        <div>
                            <span className="bold">
                            { content.siteSubTitles.description }:
                            </span>
                        </div>

                        {
                            project.detail.description.map( ( paragraph, index ) => {
                                return <p
                                key={ `project-description-${index}` }
                                > { paragraph } </p>
                            })
                        }
                    </div>

                    <div className="project-technologies">
                        <div className="bold">
                            { content.siteSubTitles.technologies }:
                        </div>
                        <div className="project-detail-technologies pt-2 gap-2">
                            {
                                project.technologies.map( ( technology, index ) => {
                                    return <div
                                    key={ `project-detail-technologies-${index}` }
                                    className="tags bold back-color-fourth  "
                                    >
                                        { technology }
                                    </div>
                                })
                            }
                            
                        </div>
                    </div>

                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <button 
                className="btn btn-close default-transition bold fs-6"
                onClick={ closeModal }
                >
                    Cerrar
                </button>
            </div>
        </div>
    )
}

export { ProjectDetail }