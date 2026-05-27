import { NavLink } from "react-router";
import { Home, BarChart, AlertTriangle } from "@boxicons/react";

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
        icon: BarChart
    },
    {
        label: "Alerts",
        path: "/alerts",
        icon: AlertTriangle
    }
]

export default function NavBar() {
    return (
        <nav className="nav-bar" aria-label="Navigation Principale">
            <ul className="nav-bar__list">
                {/* On utilise le tableau d'objet initialisé pour construire nos liens */}
                {navBarLinks.map(({ label, path, icon: Icon }) => (
                    <li className="nav-bar__item" key={label}>
                        <NavLink
                        to={path}
                        className={({ isActive }) => {
                            isActive ? "nav-bar__link nav-bar__link--active" : "nav-bar__link"
                        }}
                        >
                        {/* On empêche les icônes d'être lu par les lecteurs d'écran */}
                        <Icon className="nav-bar__icon" aria-hidden="true"/>
                        <span className="nav-bar__label">{label}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}