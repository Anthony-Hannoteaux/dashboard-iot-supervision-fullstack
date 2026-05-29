import './styles.scss';

/**
 * Composant bouton réutilisable de filtrage par période 
 */
export default function FilterButton({ label, isDisabled = false, isActive = false, value, onClick }) {

    // Gestion de la classe active pour l'indication visuel de la page active
    const btnClassName = isActive
    ? "filter-btn filter-btn--active"
    : "filter-btn"

    return (
        <button
        type='button'
        className={btnClassName}
        value={value}
        disabled={isDisabled}
        aria-pressed={isActive}
        onClick={onClick}
        >
            {label}
        </button>
    )
}