import Header from "../../components/ui/Header";
import NavBar from "../../components/ui/NavBar";

export default function HomePage() {
    return (
        <>
            <Header title="Dashboard"/>
            <NavBar />
            <main>
                <h1>HomePage - Dashboard Supervision IoT</h1>
                <p>Test de rendu et test des routes avec ReactRouter</p>
            </main>
        </>
    )
}
