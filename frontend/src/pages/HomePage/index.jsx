import Header from "../../components/ui/Header";
import NavBar from "../../components/ui/NavBar";
import FilterButtonLayout from "../../components/ui/FilterLayout";
import DashboardSection from "../../components/ui/DashboardSection";

export default function HomePage() {

    const pageTitle = "Dashboard";

    return (
        <>
            <Header title={pageTitle}/>
            <main>
                <NavBar activeTitle={pageTitle}/>
                <FilterButtonLayout/>
                <DashboardSection
                lastMeasure={"10 : 10"}
                />
            </main>
        </>
    )
}
