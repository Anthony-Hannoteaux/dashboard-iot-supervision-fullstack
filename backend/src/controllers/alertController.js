import Alert from "../models/Alert.js";
import Measure from "../models/Measure.js";
import alertUtils from "../../utils/alertUtils.js";

const alertController = {
    // Route POST /api/alerts
    createAlerts: async (req, res) => {
        try {
            const measures = await Measure.findMeasuresWithThreslholds();

            const alerts = measures
            .map(measure => alertUtils.createAlertFromMeasures(measure))
            // On filtre les valeurs qui ne génère pas d'alerte
            .filter((alert) => alert !== null)

            // On stock nos alertes dans un tableau
            const alertArray = []

            for (const alert of alerts) {
                const result = await Alert.create(alert)

                // Si aucun nouvel enregistrer n'est effectué
                if (!result.rows[0]) {
                    return res.status(200).json({
                        status: "OK",
                        message: "Aucune nouvelle alerte détectée"
                    })
                }
                else {
                    alertArray.push(result.rows[0])
                }
            }
            // Si au moins un enregistrement est effectué
            return res.status(201).json({
                status: "Succès",
                message: `Nombre d'alerte(s) enregistrée(s) : ${alertArray.length}`,
                data: alertArray
            })

        } catch (error) {
            return res.status(500).json({
                status: "Echec",
                message: "Erreur survenue lors de la création des alertes",
                error: error.message
            })
        }
    } 
}

export default alertController;