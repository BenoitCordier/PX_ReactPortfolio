import { useId } from "react";
import "./Projects.css";

export function Projects () {

    const projects = [
        {id: useId(),
            name: "Portfolio",
            context: "Projet personnel",
            description: "Création de mon portfolio professionnel avec React.",
            imgSrc: "/portfolio.jpg",
            link: "https://bcordier.com/",
            tech: "HTML | CSS | React"},    
        {id: useId(),
            name: "Projet final : Games & Friends",
            context: "Projet de formation",
            description: "Créer une application de géolocalisation pour joueurs de jeux de sociétés. Utilisation de Symfony pour l'ensemble du projet. Gestion de la partie administration avec EasyAdmin.",
            imgSrc: "/project5.jpg",
            link: "http://gamesandfriends.bcordier.com/",
            tech: "HTML | CSS | JS | Symfony 6 | Twig"},    
        {id: useId(),
            name: "Créez un blog pour un écrivain",
            context: "Projet de formation",
            description: "Créer une application de blog pour un écrivain. Utilisation de PHP pour créer le CRUD demandé par le cahier des charges.",
            imgSrc: "/project4.jpg",
            link: "http://project4.bcordier.com/",
            tech: "HTML | CSS | JS | PHP 8"},    
        {id: useId(),
            name: "Concevez une carte interactive de location de vélos",
            context: "Projet de formation",
            description: "Développer une single page application simulant la réservation de vélos dans une ville. SPA conçue avec JS. Utilisation d'API externe pour générer une carte et charger des données qui seront affichées dessus.",
            imgSrc: "/project3.jpg",
            link: "http://project3.bcordier.com/",
            tech: "HTML | CSS | JS"},
        {id: useId(),
            name: "Intégrez la maquette du site d'une agence web",
            context: "Projet de formation",
            description: "S'occuper de la refonte du site web de l'agence pour laquelle on travaille. Intégration de maquette en HTML et CSS. Réalisation d'un carroussel fonctionnel et automatisé en pur CSS.",
            imgSrc: "/project1.jpg",
            link: "http://project1.bcordier.com/",
            tech: "HTML | CSS"},
    ]

    return <>
        <div className="col-lg-8 col-md-10 col-sm-10 col-10 container content me-5">
            <h3 className="fs-5"><span className="functionText">function</span> Projets<span className="accolade">{" {"}</span></h3>
            <ul className="projects">
                {projects.map(project => (
                    <a href={project.link} rel="noopener noreferrer" target="_blank" key={project.id}>
                        <li className="row project p-4">
                            <div className="col-3 imgContainer">
                                <img className="projectImg" src={project.imgSrc} alt={project.name} />
                            </div>
                            <div className="col">
                                <span className="blue">{"<p "} id : </span><span className="projectTitle">{project.name}</span> <br />
                                <span className="blue">className : </span>{project.context} <span className="blue">{">"}</span> <br /><br />
                                {project.description} <br /><br />
                                <span className="blue">{"<small> "}</span>{project.tech}<span className="blue">{" </small>"}</span><br />
                                <span className="blue">{"</p> "}</span>
                            </div>
                        </li>
                    </a>
                ))}
            </ul>
            <span className="accolade fs-5">{"}"}</span>
        </div>
    </>
}