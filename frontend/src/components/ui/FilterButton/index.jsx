import './styles.scss';

/**
 * Composant bouton réutilisable de filtrage par période 
 */
export default function FilterButton({ label, isActive = false, onClick }) {

    // Gestion de la classe active pour l'indication visuel de la page active
    const btnClassName = isActive
    ? "filter-btn filter-btn--active"
    : "filter-btn"

    return (
        <button
        type='button'
        className={btnClassName}
        aria-pressed={isActive}
        onClick={onClick}
        >
            {label}
        </button>
    )
}