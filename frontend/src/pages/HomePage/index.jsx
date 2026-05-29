import Header from "../../components/ui/Header";
import NavBar from "../../components/ui/NavBar";
import FilterButtonLayout from "../../components/ui/FilterLayout";
import FilterButton from "../../components/ui/FilterButton";

export default function HomePage() {

    const pageTitle = "Dashboard";

    return (
        <>
            <Header title={pageTitle}/>
            <main>
                <NavBar activeTitle={pageTitle}/>
                <FilterButtonLayout/>
                <h1>HomePage - Dashboard Supervision IoT</h1>
                <p>Test de rendu et test des routes avec ReactRouter</p>
            </main>
        </>
    )
}
