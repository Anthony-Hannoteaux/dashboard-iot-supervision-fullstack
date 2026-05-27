import { Link } from "react-router";
import Header from "../../components/ui/Header";

const NotFoundPage = () => {
    return (
        <>
            <Header title="Page introuvable"/>
            <main>
                <h1>NotFoundPage - Dashboard Supervision IoT</h1>
                <p>Test de rendu de la page 404</p>
                <Link to="/">Retour à l'accueil</Link>
            </main>
        </>
    )
}

export default NotFoundPage;