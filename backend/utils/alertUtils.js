import Measure from "../src/models/Measure.js";
import Alert from "../src/models/Alert.js";

// Utilitaire permettant de traiter les seuils limites lors de la génération d'alerte

const data = [
    // Température entre seuils
    {
        measure_id: 1,
        value: 20,
        unit: '°C',
        recorded_at: "2026-05-13T14:16:31.249Z",
        sensor_id: 1,
        name: 'Salon',
        type: 'temperature',
        minimum_threshold: 18,
        maximum_threshold: 28,
        location_id: 1
    },
    // Température supérieur au seuil minimum de +2°C
    {
        measure_id: 2,
        value: 15,
        unit: '°C',
        recorded_at: "2026-05-13T14:16:31.249Z",
        sensor_id: 1,
        name: 'Salon',
        type: 'temperature',
        minimum_threshold: 18,
        maximum_threshold: 28,
        location_id: 1
    },
    // Température supérieur au seuil maximum de -2°C
    {
        measure_id: 3,
        value: 28.9,
        unit: '°C',
        recorded_at: "2026-05-13T14:16:31.249Z",
        sensor_id: 1,
        name: 'Salon',
        type: 'temperature',
        minimum_threshold: 18,
        maximum_threshold: 28,
        location_id: 1
    },
    // Humidité entre seuils
    {
        measure_id: 4,
        value: 50.5,
        unit: '%',
        recorded_at: "2026-05-13T14:16:31.249Z",
        sensor_id: 2,
        name: 'Salon',
        type: 'humidity',
        minimum_threshold: 40,
        maximum_threshold: 70,
        location_id: 1
    },
    // Humidité supérieur au seul minimum de +2%
    {
        measure_id: 5,
        value: 35,
        unit: '%',
        recorded_at: "2026-05-13T14:16:31.249Z",
        sensor_id: 2,
        name: 'Salon',
        type: 'humidity',
        minimum_threshold: 40,
        maximum_threshold: 70,
        location_id: 1
    },
    {
        measure_id: 6,
        value: 70.9,
        unit: '%',
        recorded_at: "2026-05-13T14:16:31.249Z",
        sensor_id: 2,
        name: 'Salon',
        type: 'humidity',
        minimum_threshold: 40,
        maximum_threshold: 70,
        location_id: 1
    },
]

const getSensorType = (sensorType) => {
    if (sensorType === "temperature") {
        return "Température"
    };

    if (sensorType === "humidity") {
        return "Humidité"
    }
}

data.map(measure => {
    console.log(getSensorType(measure.type))
})