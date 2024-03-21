import "./AboutMe.css";

export function AboutMe () {

    return <>
        <div className="col-lg-8 col-md-10 col-sm-10 col-10 container content me-5">
            <h3 className="fs-5"><span className="functionText">function</span> &Agrave; propos de moi <span className="accolade">{" {"}</span></h3>
            <div className="aboutMeContainer">
                <div className="myPhotoDiv">
                    <div className="invisibleGridContainer">
                        <img src="/myPhoto.jpg" className="myPhoto" alt="maPhoto"/>
                        <a href="/CV_Cordier_Benoit_Developpeur_Web.pdf" className="cvButton" target="_blank" rel="noopener noreferrer">Télécharger mon CV</a>
                    </div>
                </div>
                <p className="aboutMeContent">
                    <span className="blue">{"<p> "}</span>
                    Je m'appelle Benoît Cordier. J'ai découvert la programmation lors de mes années lycées et cette appétence m'a suivi au cours de mes études, resurgissant par exemple lors de mon cursus en communication.
                    <br /><br />
                    A l'occasion d'une reconversion professionnelle, j'ai décidé de me lancer dans ce domaine qui me passionne et m'enthousiasme et j'ai donc suivi une formation OpenClassrooms pendant laquelle j'ai pu acquérir les bases de plusieurs langages web, mais aussi me familiariser avec la gestion de bases de données et découvrir certains frameworks. Ayant validé et obtenu le RNCP de niveau 5 de développeur web, je suis aujourd'hui à la recherche d'un premier emploi.
                    <br /><br />
                    Curieux et investi, je suis toujours à la recherche de nouvelles connaissances et je continue de découvrir et de me former sur les technologies que je ne connais pas encore, expérimentant sur des projets personnels mais toujours avec l'exigence professionnelle que m'a inculquée ma formation.
                    <br /><br />
                    A l'aise en toutes circonstances, j'apprécie particulièrement travailler en équipe où chacun peut apporter sa pierre à l'édifice et apprendre les uns des autres en poursuivant un même objectif d'excellence et d'efficacité.
                    <br /><br />
                    Quand je ne suis pas en train de coder, on peut me retrouver en train de lire, de peindre de petits bouts de plastiques gris ou de lancer des dés entre amis en se racontant des histoires dans des univers fantastiques.
                    <span className="blue">{" </p>"}</span>
                    <br /><br />
                    <span className="accolade fs-5">{"}"}</span>
                </p>
            </div>
        </div>
    </>
}