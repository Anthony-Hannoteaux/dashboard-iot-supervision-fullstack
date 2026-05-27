import { Link } from "react-router";

export default function Header({ title }) {
    return (
        <header>
            <Link
            to="/"
            aria-label="Retour vers l'accueil"
            >
                <img src="/frontend/public/supervision-iot-logo.svg" alt="" />
            </Link>
            <h1>{title}</h1>
        </header>
    )
}