import { Link } from "react-router";
import LogoMobile from "../../../assets/supervision-iot-logo.svg"
import './styles.scss';

/**
 * Le composant Header à pour but d'être réutilisable d'une page à une autre
 * La props "title" permettra donc de modifier le titre principal de notre page
 */

export default function Header({ title }) {
    return (
        <header className="header">
            <div>
                <Link
                    to="/"
                    aria-label="Retour vers l'accueil"
                >
                    <img className="header__logo" src={LogoMobile} alt="" />
                </Link>
            </div>
            <h1 className="main-title" >{title}</h1>
        </header>
    )
}