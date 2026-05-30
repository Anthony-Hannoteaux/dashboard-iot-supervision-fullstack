import './styles.scss'

export default function Card({ title, measureTemp, measureHum }) {
    return (
        <article className='dashboard-card'>
            <header className='dashboard-card__header'>
                <h3 className='dashboard-card__title'>
                    {title}
                </h3>
            </header>
            <div className='dashboard-card__body'>
                <div className='dashboard-card__measure__wrapper'>
                    <span className='measure-type'>Température</span>
                    <span className='measure-value measure-value--temperature'>{measureTemp}</span>
                </div>
                <div className='dashboard-card__measure__wrapper'>
                    <span className='measure-type'>Humidité</span>
                    <span className='measure-value measure-value--humidity'>{measureHum}</span>
                </div>
            </div>
            <aside className='dashboard-card__aside'>
                <h4 className='dashboard-card__aside__title'>Statistiques</h4>
            </aside>
        </article>
    )
}