import './styles.scss';

export default function DashboardSection({ lastMeasure, children }) {
    return (
        <section className="section section-dashboard">
            <span className="last-measure">Dernière mesure : {lastMeasure}</span>
            <h2 className="sr-only">Cartes de statut des capteurs</h2>
            {children}
        </section>
    )
}