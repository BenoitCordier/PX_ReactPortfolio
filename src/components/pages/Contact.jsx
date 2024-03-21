import "./Contact.css";

export function Contact () {

    return <>
        <div className="col-8 container content  me-5">
            <h3 className="fs-5"><span className="functionText fs-6">function</span> Contact<span className="accolade">{" {"}</span></h3>
            <div>
                <p className="blue">switch ($action) {" {"}</p>
                <div className="contactContent">
                    <div className="contactItem">
                        <p><span className="blue">case</span> 'Téléphone':</p>
                        <div className="row contactRow nonRsRow">
                            <i className="fa-solid fa-phone col-1"></i>
                            <div className="col-6">06.75.13.27.50</div>
                        </div>
                        <p className="blue">break;</p>
                    </div>
                    <div className="contactItem">
                        <p><span className="blue">case</span> 'Email':</p>
                        <div className="row contactRow nonRsRow">
                            <i className="fa-solid fa-at col-1"></i>
                            <div className="col-6">bca.cordier@gmail.com</div>
                        </div>
                        <p className="blue">break;</p>
                    </div>
                    <div className="contactItem rsItemContact">
                        <p><span className="blue">case</span> 'Réseaux sociaux':</p>
                        <div className="row g-5 contactRow">
                            <a href="https://github.com/BenoitCordier" target="_blank" rel="noopener noreferrer" className="col-1">
                                <i className="fa-brands fa-github-square"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/beno%C3%AEt-cordier-4043a0235/" target="_blank" id="lkdIcon" className="col-1">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://twitter.com/B_Cordier" target="_blank" id="twtIcon" className="col-1">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                            <a href="https://www.facebook.com/benoit.crdr" target="_blank" id="fbIcon" className="col-1">
                                <i className="fa-brands fa-facebook-square"></i>
                            </a>
                        </div>
                        <p className="blue">break;</p>
                    </div>
                    <span className="accolade fs-5 blue">{"}"}</span>
                </div>
            </div>
            <span className="accolade fs-5">{"}"}</span>
        </div>
    </>
}