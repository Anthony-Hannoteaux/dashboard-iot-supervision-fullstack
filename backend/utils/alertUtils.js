import Measure from "../src/models/Measure.js";
import Alert from "../src/models/Alert.js";

// Utilitaire permettant de traiter les seuils limites lors de la génération d'alerte

const data = [
    // Température entre seuils
    // PAS D'ALERTE
    {
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
        location_name: 'Salon'
    },
    // Température supérieur au seuil minimum de 3°C
    // ALERTE CRITIQUE
    {
        measure_id: 2,
        value: 15,
        unit: '°C',
        recorded_at: "2026-05-13T14:16:31.249Z",
        sensor_id: 1,
        sensor_name: 'Température Salon',
        type: 'temperature',
        minimum_threshold: 18,
        maximum_threshold: 28,
        location_id: 1,
        location_name: 'Salon'
    },
    // Température supérieur au seuil maximum de 0.9°C
    // ALERTE INFO
    {
        measure_id: 3,
        value: 28.9,
        unit: '°C',
        recorded_at: "2026-05-13T14:16:31.249Z",
        sensor_id: 1,
        sensor_name: 'Température Salon',
        type: 'temperature',
        minimum_threshold: 18,
        maximum_threshold: 28,
        location_id: 1,
        location_name: 'Salon'
    },
    // Humidité entre seuils
    // PAS D'ALERTE
    {
        measure_id: 4,
        value: 50.5,
        unit: '%',
        recorded_at: "2026-05-13T14:16:31.249Z",
        sensor_id: 2,
        sensor_name: 'Humidité Salon',
        type: 'humidity',
        minimum_threshold: 40,
        maximum_threshold: 70,
        location_id: 1,
        location_name: 'Salon'
    },
    // Humidité supérieur au seuil minimum de 5%
    // ALERTE CRITIQUE
    {
        measure_id: 5,
        value: 35,
        unit: '%',
        recorded_at: "2026-05-13T14:16:31.249Z",
        sensor_id: 2,
        sensor_name: 'Humidité Salon',
        type: 'humidity',
        minimum_threshold: 40,
        maximum_threshold: 70,
        location_id: 1,
        location_name: 'Salon'
    },
    // Humidité supérieur au seuil maximum de 0.9%
    // ALERTE INFO
    {
        measure_id: 6,
        value: 70.9,
        unit: '%',
        recorded_at: "2026-05-13T14:16:31.249Z",
        sensor_id: 2,
        sensor_name: 'Humidité Salon',
        type: 'humidity',
        minimum_threshold: 40,
        maximum_threshold: 70,
        location_id: 1,
        location_name: 'Salon'
    },
    // Humidité supérieur au seuil maximum de 1.5%
    // ALERTE WARNING
    {
        measure_id: 7,
        value: 71.5,
        unit: '%',
        recorded_at: "2026-05-13T14:16:31.249Z",
        sensor_id: 2,
        sensor_name: 'Humidité Salon',
        type: 'humidity',
        minimum_threshold: 40,
        maximum_threshold: 70,
        location_id: 1,
        location_name: 'Salon'
    },
    // Température supérieur au seuil minimum de 1.5°C
    // ALERTE WARNING
    {
        measure_id: 8,
        value: 16.5,
        unit: '°C',
        recorded_at: "2026-05-13T14:16:31.249Z",
        sensor_id: 1,
        sensor_name: 'Température Salon',
        type: 'temperature',
        minimum_threshold: 18,
        maximum_threshold: 28,
        location_id: 1,
        location_name: 'Salon'
    },
]

/**
 * Récupère le type de valeurs enregistré et la transforme en chaîne de caractère exploitable en rendu
 * @param { string } sensorType - Type de valeur enregistré
 * @returns { string }
 */
const getSensorType = (sensorType) => {
    if (sensorType === "temperature") {
        return "Température"
    };

    if (sensorType === "humidity") {
        return "Humidité"
    }
}

/**
 * Affiche le degré d'urgence en fonction de la différence du seuil dépassé
 * @param { number } gap - Différence entre le seuil et la valeur de la mesure
 * @returns { string } - Degré d'urgence de l'alerte
 */
const calcUrgencyDegree = (gap) => {
    if (gap >= 2) {
        return "critical"
    }

    if (gap >= 1) {
        return "warning"
    }

    return "info"
}

/**
 * Récupère les valeurs nécessaire à la création des alertes sous forme d'objet
 * @param { Object } measure - Valeurs nécessaires au calcul d'une alerte
 * @param { number } measure.measure_id - Identifiant de la mesure
 * @param { number } measure.value - Valeur de la mesure
 * @param { number } measure.minimum_threshold - Seuil minimal du capteur
 * @param { number } measure.maximum_threshold - Seuil maximal du capteur
 * @param { string } measure.location_name - Nom de la salle où se situe le capteur
 * Retourne les détails de l'alerte sous forme d'objet
 * @returns { Object } - Objet contenant les valeurs nécessaires à l'enregistrement de l'alerte
 * @property { string } alert_type - Type de l'alerte
 * @property { string } urgency_degree - Degré de l'alerte
 * @property { string } message - Message exploitable côté front
 * @property { number } threshold_value - Valeur du seuil limite dépassé
 * @property { number } measure_id - Identifiant de la mesure
 */
const createAlertFromMeasures = (measure) => {
    const value = measure.value;
    const minimumThreshold = measure.minimum_threshold;
    const maximumThreshold = measure.maximum_threshold;

    // Calcul de la différence entre la mesure récupéré et son seuil
    let alertDirection = null;
    let gap = 0;
    let thresholdValue = null;

    /** On détermine le seuil dépassé **/
    // Seuil minimal
    if (value < minimumThreshold) {
        alertDirection = "low";
        gap = Math.round((minimumThreshold - value) * 10) / 10;
        thresholdValue = minimumThreshold;
    }
    
    // Seuil maximal
    if (value > maximumThreshold) {
        alertDirection = "high";
        gap = Math.round((value - maximumThreshold) * 10) / 10;
        thresholdValue = maximumThreshold;
    }

    if (!alertDirection) {
        return null
    }
    
    const sensorType = getSensorType(measure.type)
    const urgencyDegree = calcUrgencyDegree(gap)

    const messageDirection = alertDirection === "high" ? "élevée" : "basse"
    
    return {
        alert_type: `${measure.type}_${alertDirection}`,
        urgency_degree: urgencyDegree,
        message: `${sensorType} ${messageDirection} - ${measure.location_name}`,
        threshold_value: thresholdValue,
        measure_id: measure.measure_id,
    }
}

console.log("Objet utilisé pour l'enregistrement de nos alertes :" ,data.map(measure => createAlertFromMeasures(measure)))