import FilterButton from "../FilterButton";
import { useState } from "react";

// Composant servant de layout aux boutons de filtrages

// On souhaite que le graphique affiche par défaut les valeurs enregistrées depuis la dernière heure
export default function FilterButtonLayout({ activeFilter = "last-hour" }) {
    // On dynamise l'initialisation de nos boutons de filtrage
    const periodFilter = [
        {
            label: "Heure",
            value: "last-hour",
            disabled: false
        },
        {
            label: "Jour",
            value: "last-day",
            disabled: false
        },
        {
            label: "Semaine",
            value: "last-week",
            disabled: false
        },
        {
            label: "Mois",
            value: "last-month",
            disabled: true
        },
    ]

    // Etat qui correspond au filtre actif (bouton actif)
    const [selectedFilter, setSelectedFilter] = useState(activeFilter)

    const handleChange = (value) => {
        setSelectedFilter(value)
    }

return (
    <div
        className="filter-layout"
        aria-label="Filtrer les données du dashboard par période"
    >
        {/* On génère nos boutons à partir du tableau periodFilter */}
        {periodFilter.map((filter, index) => (

            <FilterButton
                key={index}
                label={filter.label}
                value={filter.value}
                // Si selectedFilter vaut la même valeur que filter.value, alors le bouton est actif 
                isActive={selectedFilter === filter.value}
                isDisabled={filter.disabled}
                onClick={() => handleChange(filter.value)}
            />
        ))}
    </div>
    )
}