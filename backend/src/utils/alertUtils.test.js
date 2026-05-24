import { describe, it, expect } from "vitest";

import alertUtils from "./alertUtils";

const createMesure = ((overrides) => ({
    measure_id: 1,
    value: 20,
    unit: '°C',
    recorded_at: "2026-05-13T14:16:31.249Z",
    sensor_id: 1,
    sensor_name: 'Température Salon',
    type: 'temperature',
    minimum_threshold: 18,
    maximum_threshold: 28,
    location_id: 1,
    location_name: 'Salon',
    ...overrides
}))

describe("Tests les valeurs récupéré lors de l'appel de la fonction alertUltils.createAlertFromMeasure", () => {

    // Test les valeurs de température entre seuil
    it("Retourne null quand la valeur est comprise entre les seuils", () => {
        const measure = createMesure({
            value: 20,
            minimum_threshold: 18,
            maximum_threshold: 28
        })

        const result = alertUtils.createAlertFromMeasures(measure)

        expect(result).toBeNull()
    })

    // Test les valeurs dépassant légérement le seuil maximum de température du capteur situé dans le salon
    it("Créé une alerte 'info' quand la température dépasse légèrement le seuil maximum", () => {
        const measure = createMesure({
            measure_id: 2,
            value: 28.5,
            minimum_threshold: 18,
            maximum_threshold: 28,
            location_name: 'Salon'
        })

        const result = alertUtils.createAlertFromMeasures(measure)

        expect(result).toEqual({
            alert_type: "temperature_high",
            urgency_degree: "info",
            message: "Température élevée - Salon",
            threshold_value: 28,
            measure_id: 2
        })
    })

    // Test les valeurs dépassant le seuil minimum dhumidité du capteur situé dans la cuisine
    it("Créer une alerte 'warning' quand l'humidité dépasse le seuil minimum", () => {
        const measure = createMesure({
            measure_id: 3,
            value: 38.5,
            type: 'humidity',
            minimum_threshold: 40,
            maximum_threshold: 70,
            location_name: 'Cuisine'
        })

        const result = alertUtils.createAlertFromMeasures(measure)

        expect(result).toEqual({
            alert_type: "humidity_low",
            urgency_degree: "warning",
            message: "Humidité basse - Cuisine",
            threshold_value: 40,
            measure_id: 3
        })
    })

    // Test les valeurs dépassant fortement le seuil maximum de température du capteur situé dans la chambre
    it("Créer une alerte 'critical' quand la température dépasse fortement le seuil maximum", () => {
        const measure = {
            measure_id: 4,
            value: 34.3,
            type: 'temperature',
            minimum_threshold: 20,
            maximum_threshold: 30,
            location_name: 'Chambre'
        }

        const result = alertUtils.createAlertFromMeasures(measure)

        expect(result).toEqual({
            alert_type: "temperature_high",
            urgency_degree: "critical",
            message: "Température élevée - Chambre",
            threshold_value: 30,
            measure_id: 4
        })
    })
})