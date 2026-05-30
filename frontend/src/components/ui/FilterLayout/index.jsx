import FilterButton from "../FilterButton";
import { periodFilter, useFilterLayout } from "../../../hooks/useFilterLayout";
import './styles.scss'

// Composant servant de layout aux boutons de filtrages

// On souhaite que le graphique affiche par défaut les valeurs enregistrées depuis la dernière heure
export default function FilterButtonLayout({ activeFilter = "last-hour" }) {

    // Gestion de la logique d'état par l'intermédiaire du hook personnalisé
    const { selectedFilter, handleChange } = useFilterLayout(activeFilter)
    
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