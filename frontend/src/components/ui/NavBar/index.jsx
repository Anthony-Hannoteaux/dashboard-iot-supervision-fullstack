import { NavLink } from "react-router";
import { Home, ChartTrend, AlertOctagon } from "@boxicons/react";

import './styles.scss';

// Initialisation des liens de navigations
const navBarLinks = [
    {
        label: "Dashboard",
        path: "/",
        icon: Home
    },

    {
        label: "Relevés",
        path: "/readings",
        icon: ChartTrend
    },
    {
        label: "Alerts",
        path: "/alerts",
        icon: AlertOctagon
    }
]

export default function NavBar({ isActive, activeTitle }) {
    return (
        <div className="nav-bar__wrapper">
            <nav className="nav-bar" aria-label="Navigation Principale">
                <ul className="nav-bar__list">

                    {/* On utilise le tableau d'objet initialisé pour construire nos liens */}
                    {navBarLinks.map(({ label, path, icon: Icon }) => {

                        // Gestion de la classe active pour l'indication visuel de la page active
                        const isActive = activeTitle === label;
                        const linkClassName = isActive
                            ? "nav-bar__wrapper__icon nav-bar__wrapper__icon--active"
                            : "nav-bar__wrapper__icon"

                        return (
                            <li className="nav-bar__item" key={label}>
                                <NavLink
                                    to={path}
                                    className="nav-bar__link"
                                >
                                    <div
                                        className={linkClassName}
                                    >
                                        {/* On empêche les icônes d'être lu par les lecteurs d'écran */}
                                        <Icon className="icon" aria-hidden="true" />
                                    </div>
                                    <span className="nav-bar__label">{label}</span>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}