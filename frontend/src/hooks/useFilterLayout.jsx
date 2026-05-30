import { useState } from "react";

/**
 * Hook personnalisé contenant la logique d'état du composant FilterLayout
 * Contient également le tableau d'objet servant à la génération de boutons de filtrage
 */

export const periodFilter = [
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

/**
 * 
 * @param { string } btnValue - Valeur de l'attribut du bouton lors de l'écoute d'un clic
 * @returns { string } selectedFilter -  Valeur de l'attribut value du bouton cliqué
 * @returns { function } handleChange - Gestionnaire de changement de la valeur de la variable d'état lors du clic
 */
export function useFilterLayout(btnValue) {

    // Etat qui correspond au filtre actif (bouton actif)
    const [selectedFilter, setSelectedFilter] = useState(btnValue)

    const handleChange = (btnValue) => {
        setSelectedFilter(btnValue)
    }

    return {
        selectedFilter,
        handleChange
    }
}