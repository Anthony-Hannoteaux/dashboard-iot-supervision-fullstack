import { useEffect } from 'react';
import { dashboardLocation } from '../../services/api.js';

export default function HomePage() {
    // Test d'affichage de la réponse en console de l'appel API
    useEffect(() => {
        async function getLocation() {
            try {
                const locations = await dashboardLocation();
                console.log(locations)
            } catch (error) {
                console.error(error)
            }
        }
        getLocation()
    }, [])

    return (
        <main>
            <h1>HomePage - Dashboard Supervision IoT</h1>
            <p>Test de rendu et test des routes avec ReactRouter</p>
        </main>
    )
}