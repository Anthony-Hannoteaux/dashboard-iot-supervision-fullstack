import { Link } from "react-router"; 

const NotFoundPage = () => {
    return (
        <main>
            <h1>NotFoundPage - Dashboard Supervision IoT</h1>
            <p>Test de rendu de la page 404</p>
            <Link to="/">Retour à l'accueil</Link>
        </main>
    )
}

export default NotFoundPage;