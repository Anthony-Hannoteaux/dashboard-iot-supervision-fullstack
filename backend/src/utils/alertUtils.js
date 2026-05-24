// Utilitaire permettant de traiter les seuils limites lors de la génération d'alerte

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

const alertUtils = {
    /**
     * Récupère les valeurs nécessaire à la création des alertes sous forme d'objet
     * @param { Object } measure - Valeurs nécessaires au calcul d'une alerte
     * @param { number } measure.measure_id - Identifiant de la mesure
     * @param { number } measure.value - Valeur de la mesure
     * @param { number } measure.minimum_threshold - Seuil minimal du capteur
     * @param { number } measure.maximum_threshold - Seuil maximal du capteur
     * @param { string } measure.type - Type de mesure enregistrée (temperature/humidity)
     * @param { string } measure.location_name - Nom de la salle où se situe le capteur
     * Retourne les détails de l'alerte sous forme d'objet
     * @returns { Object } - Objet contenant les valeurs nécessaires à l'enregistrement de l'alerte
     * @property { string } alert_type - Type de l'alerte
     * @property { string } urgency_degree - Degré de l'alerte
     * @property { string } message - Message exploitable côté front
     * @property { number } threshold_value - Valeur du seuil limite dépassé
     * @property { number } measure_id - Identifiant de la mesure
     */
    createAlertFromMeasures: (measure) => {
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
}

export default alertUtils;