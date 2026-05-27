import { Link } from "react-router";
import Header from "../../components/ui/Header";
import NavBar from "../../components/ui/NavBar";

const NotFoundPage = () => {
    const pageTitle = "Page introuvable"
    return (
        <>
            <Header title={pageTitle}/>
            <NavBar />
            <main>
                <h1>NotFoundPage - Dashboard Supervision IoT</h1>
                <p>Test de rendu de la page 404</p>
                <Link to="/">Retour à l'accueil</Link>
            </main>
        </>
    )
}

export default NotFoundPage;