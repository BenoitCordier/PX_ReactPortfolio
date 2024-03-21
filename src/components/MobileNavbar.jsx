import { useState, useId } from "react";
import "./MobileNavbar.css";
import { CustomNavLink } from "./CustomNavLink";

export function MobileNavbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

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

    return (
        <nav className="mobileNavbar">
            <div className="mobileNavbarTitle">
                <h1>Benoit Cordier</h1>
                <h2>Developpeur web</h2>
            </div>
            <div className="mobileNavbarSocial">
                <a href="https://github.com/BenoitCordier" target="_blank" rel="noopener noreferrer" className="iconGitHub mobileRsIcon">
                    <i className="fa-brands fa-github-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/beno%C3%AEt-cordier-dev-web/" target="_blank" rel="noopener noreferrer" className="iconLinkedIn  mobileRsIcon">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/B_Cordier" target="_blank" rel="noopener noreferrer" className="iconX  mobileRsIcon">
                    <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.facebook.com/benoit.crdr" target="_blank" rel="noopener noreferrer" className="iconFB  mobileRsIcon">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
            </div>
            <button
                className="hamburger"
                onClick={() => {
                setIsNavExpanded(!isNavExpanded);
                }}
            >
                <i className="fa-solid fa-bars xCross"></i>
            </button>
            <div
                className={
                isNavExpanded ? "mobileNavbarMenu expanded" : "mobileNavbarMenu"
                }
            >
                <ul>
                <li>
                    <i
                    onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                    }}
                    className="fa-solid fa-xmark"
                    ></i>
                </li>
                {
                    navCategories.map(navCategory => (
                        <li
                            id={navCategory.id}
                            key={navCategory.id}
                            onClick={() => {
                                setIsNavExpanded(!isNavExpanded);
                            }}
                        >
                            <CustomNavLink
                                to={navCategory.to}
                                inActiveIcon={""}
                                activeIcon={""}
                                text={navCategory.text} />
                        </li>
                    ))
                }
            </ul>
        </div>
    </nav>
    );
}
