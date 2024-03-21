import { useRouteError } from "react-router-dom";
import { Navbar } from "/src/components/Navbar";

export function PageError() {
    const error = useRouteError()
    return <>
        <div className="row">
            <Navbar />
            <div className="col-8 container content me-5">
                <h3 className="fs-5"><span className="functionText fs-6">function</span> Erreur<span className="accolade">{" {"}</span></h3>
                <p>
                    L'erreur suivante est survenue :
                    <br /><br />
                    {error?.error?.toString() ?? error?.toString()}
                    <br /><br />
                    Vous pouvez utiliser la barre de navigation pour revenir sur le site.
                    <br />
                    Toutes mes excuses pour cette mésaventure. Le problème sera réglé le plus rapidement possible.
                    <br /><br />
                    <span className="accolade fs-5">{" }"}</span>
                </p>
            </div>
        </div>
    </>
}