/**
 * Appel de la variable d'environnement préfixées par "VITE_"
 * Seul ces dernières seront exposées côtés frontend avec Vite
 * @link https://vitejs.fr/guide/env-and-mode.html
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function dashboardLocation() {
    const response = await fetch((`${API_BASE_URL}/dashboard/locations`), {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })

    if (!response.ok) {
        throw new Error(`Erreur API : ${response.status}`)
    }

    return response.json();
}