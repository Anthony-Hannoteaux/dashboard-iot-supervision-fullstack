import Header from "../../components/ui/Header";
import NavBar from "../../components/ui/NavBar";
import FilterButton from "../../components/ui/FilterButton";

export default function HomePage() {
    const pageTitle = "Dashboard";
    return (
        <>
            <Header title={pageTitle}/>
            <main>
                <NavBar activeTitle={pageTitle}/>
                <div>
                    <FilterButton label={"Heure"} isActive/>
                    <FilterButton label={"Jour"}/>
                    <FilterButton label={"Semaine"}/>
                    <FilterButton label={"Mois"}/>
                </div>
                <h1>HomePage - Dashboard Supervision IoT</h1>
                <p>Test de rendu et test des routes avec ReactRouter</p>
            </main>
        </>
    )
}
