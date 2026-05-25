/**
 * L'intérêt de ce contrôleur et de contrôler nos requêtes SQL tout en les limitants au maximum
 */
import Location from "../models/Location.js";
import Measure from "../models/Measure.js";
import Alert from "../models/Alert.js";

const dashboardControler = {
    // Route GET /api/dashboard/locations
    getDashboardLocation: async (req, res) => {
        try {
            const result = await Location.findAll();
            return res.status(200).json({
                status: "Succès",
                data: result
            })
        } catch (error) {
            return res.status(500).json({
                status: "Echec",
                message: "Erreur survenue lors de la récupération des salles du dashboard",
                error: error.message
            })
        }
    },
    // Route GET /api/dashboard/sensor/:sensorId/measures?period=last-hour
    getDashboardSensorMeasures: async (req, res) => {
        try {
            // On définit les périodes autorisés
            const allowedPeriods = ["last-hour", "last-day", "last-week"]
            const sensorId = Number(req.params.sensorId);
            const period = req.query.period

            if (!Number.isInteger(sensorId) || sensorId <= 0) {
                return res.status(400).json({
                    status: "Echec",
                    message: "L'identifiant du capteur est invalide"
                })
            }
            
            if (!allowedPeriods.includes(period)) {
                return res.status(400).json({
                    status: "Echec",
                    message: "La période est invalide"
                })
            }

            const result = await Measure.findSensorMeasuresByPeriod(sensorId, period);

            return res.status(200).json({
                status: "Succès",
                data: result
            })

        } catch (error) {
            return res.status(500).json({
                status: "Echec",
                message: "Erreur survenue lors de la récupération des messures du dashboard",
                error: error.message
            })
        }
    }
}

export default dashboardControler;