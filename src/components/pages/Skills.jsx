import { useId } from "react";
import "./Skills.css";

export function Skills () {

    const frontends = [
        {
            id: useId(),
            lowerText: "html",
            upperText: "HTML",
            iconClass: "fa-brands fa-html5",
        },
        {
            id: useId(),
            lowerText: "css",
            upperText: "CSS",
            iconClass: "fa-brands fa-css3",
        },
        {
            id: useId(),
            lowerText: "js",
            upperText: "JS",
            iconClass: "fa-brands fa-square-js",
        },
        {
            id: useId(),
            lowerText: "react",
            upperText: "React",
            iconClass: "fa-brands fa-react",
        },
    ]
    const backends = [
        {
            id: useId(),
            lowerText: "php",
            upperText: "PHP",
            iconClass: "fa-brands fa-php",
        },
        {
            id: useId(),
            lowerText: "symfony",
            upperText: "Symfony",
            iconClass: "fa-brands fa-symfony",
        },
        {
            id: useId(),
            lowerText: "mysql",
            upperText: "MySQL",
            iconClass: "fa-solid fa-database",
        },
    ]
    const others = [
        {
            id: useId(),
            lowerText: "wordpress",
            upperText: "WordPress",
            iconClass: "fa-brands fa-wordpress",
        },
        {
            id: useId(),
            lowerText: "drupal",
            upperText: "Drupal",
            iconClass: "fa-brands fa-drupal",
        }
    ]

    return <>
        <div className="col-lg-8 col-md-10 col-sm-10 col-10 container content me-5">
            <h3 className="fs-5"><span className="functionText">function</span> Compétences<span className="accolade">{" {"}</span></h3>
            <div>
                <div className="skills row">
                    <div className="skills skillsItem col-lg-4" >
                        <p><span className="blue">if {"( "}</span>Frontend<span className="blue">{" )"}</span></p>
                        <span className="accolade blue">{"{"}</span>
                        {
                            frontends.map(frontend => (
                                <div className="row skillRow" key={frontend.id}>
                                    <i className={`${frontend.iconClass} col-1`} id={`${frontend.lowerText}Icon`}></i>
                                    <div className="gridGutter col-1"></div>
                                    <div className="col-6 ms-4">
                                        <p className="mt-3">{frontend.upperText}</p>
                                    </div>
                                </div>
                            ))
                        }
                        <span className="accolade blue">{" }"}</span>
                    </div>
                    <div className="skills skillsItem col-lg-4" >
                        <p><span className="blue">else if {"( "}</span>Backend<span className="blue">{" )"}</span></p>
                        <span className="accolade blue">{"{"}</span>
                        {
                            backends.map(backend => (
                                <div className="row skillRow" key={backend.id}>
                                    <i className={`${backend.iconClass} col-1`} id={`${backend.lowerText}Icon`}></i>
                                    <div className="gridGutter col-1"></div>
                                    <div className="col-6 ms-4">
                                        <p className="mt-3">{backend.upperText}</p>
                                    </div>
                                </div>
                            ))
                        }
                        <span className="accolade blue">{"}"}</span>
                    </div>
                    <div className="skills skillsItem col-lg-4" >
                        <p><span className="blue">else if {"( "}</span>Other<span className="blue">{" )"}</span></p>
                        <span className="accolade blue">{"{"}</span>
                        {
                            others.map(other => (
                                <div className="row skillRow" key={other.id}>
                                    <i className={`${other.iconClass} col-1`} id={`${other.lowerText}Icon`}></i>
                                    <div className="gridGutter col-1"></div>
                                    <div className="col-6 ms-4">
                                        <p className="mt-3">{other.upperText}</p>
                                    </div>
                                </div>
                            ))
                        }
                        <span className="accolade blue">{"}"}</span>
                    </div>
                </div>
            </div>
            <br />
            <span className="accolade fs-5">{" }"}</span>
        </div>
    </>
}