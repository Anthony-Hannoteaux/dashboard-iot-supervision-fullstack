import Header from "../../components/ui/Header";
import NavBar from "../../components/ui/NavBar";
import FilterButtonLayout from "../../components/ui/FilterLayout";
import DashboardSection from "../../components/ui/DashboardSection";
import Card from "../../components/ui/Card";

export default function HomePage() {

    const pageTitle = "Dashboard";

    return (
        <>
            <Header title={pageTitle} />
            <main>
                <NavBar activeTitle={pageTitle} />
                <FilterButtonLayout />
                <DashboardSection
                lastMeasure="10 : 10"
                >
                    <Card
                        title="Salon"
                        measureTemp="22°C"
                        measureHum="60%"
                    />
                    <Card
                        title="Salon"
                        measureTemp="22°C"
                        measureHum="60%"
                    />
                </DashboardSection>
                
            </main>
        </>
    )
}
