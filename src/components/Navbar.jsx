import { CustomNavLink } from "./CustomNavLink";
import "./Navbar.css";
import { useId } from "react";
import { Typewritter } from "./Typewritter";

export function Navbar () {
    const navCategories = [
        {
            id: useId(),
            to: "/",
            text: "About me",
        },
        {
            id: useId(),
            to: "/skills",
            text: "Skills",
        },
        {
            id: useId(),
            to: "/work",
            text: "Projects",
        }
    ]

    return <>
        <header className="col-3">
            <div className="title">
                <h1>Benoît<br />Cordier</h1>
                <h2 className="fs-5"><Typewritter text="Développeur web" delay={100} /></h2>
            </div>
            <nav className="navbar">
                <ul>
                    {
                        navCategories.map(navCategory => (
                            <li id={navCategory.id} key={navCategory.id}>
                                <CustomNavLink to={navCategory.to} inActiveIcon={<i className="fa-solid fa-chevron-right"></i>} activeIcon={<i className="fa-solid fa-chevron-down"></i>} text={navCategory.text} />
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <div className="contactItem rsItem">
                <div className="contactRow">
                    <a href="https://github.com/BenoitCordier" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github-square col"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/beno%C3%AEt-cordier-dev-web/" target="_blank" rel="noopener noreferrer" id="lkdIcon">
                        <i className="fa-brands fa-linkedin col"></i>
                    </a>
                    <a href="https://twitter.com/B_Cordier" target="_blank" rel="noopener noreferrer" id="twtIcon">
                        <i className="fa-brands fa-x-twitter col"></i>
                    </a>
                    <a href="https://www.facebook.com/benoit.crdr" target="_blank" rel="noopener noreferrer" id="fbIcon">
                        <i className="fa-brands fa-facebook-square col"></i>
                    </a>
                </div>
            </div>
        </header>
    </>
}