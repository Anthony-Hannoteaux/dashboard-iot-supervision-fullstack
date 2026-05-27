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

export default function NavBar({ activeTitle }) {
    return (
        <div className="nav-bar__wrapper">
            <nav className="nav-bar" aria-label="Navigation Principale">
                <ul className="nav-bar__list">
                    {/* On utilise le tableau d'objet initialisé pour construire nos liens */}
                    {navBarLinks.map(({ label, path, icon: Icon }) => {
                        const isActive = activeTitle === label;
                        return (
                        <li className="nav-bar__item" key={label}>
                            <NavLink
                                to={path}
                                className="nav-bar__link"
                            >
                                {/* On empêche les icônes d'être lu par les lecteurs d'écran */}
                                <div
                                className={
                                    isActive
                                        ? "nav-bar__wrapper__icon nav-bar__wrapper__icon--active"
                                        : "nav-bar__wrapper__icon"
                                }
                                >
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