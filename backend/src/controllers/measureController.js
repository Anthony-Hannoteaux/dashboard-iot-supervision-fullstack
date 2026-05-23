import Measure from "../models/Measure.js";

const measureController = {
    // Route GET /api/measures
    getAllMeasure: async (req, res) => {
        try {
            const result = await Measure.findAll();
            return res.status(200).json({
                status: "Succès",
                data: result
            });
        } catch (error) {
            return res.status(500).json({
                status: "Echec",
                message: "Erreur survenue lors de la récupération des messures",
                error: error.message
            });
        };
    },

    // Route GET /api/sensors/:sensorId/measures
    getMeasureBySensorId: async (req, res) => {
        try {
            const sensorId = Number(req.params.sensorId);

            if (!Number.isInteger(sensorId) || sensorId <= 0) {
                return res.status(400).json({
                    status: "Echec",
                    message: "L'identifiant du capteur est invalide",
                })
            }
            
            const result = await Measure.findMeasureBySensorId(sensorId);
            return res.status(200).json({
                status: "Succès",
                data: result
            })
            
        } catch (error) {
            return res.status(500).json({
                status: "Echec",
                message: "Erreur survenue lors de la récupération des messures",
                error: error.message
            });
        }
    },

    // Route GET /api/measures/thresholds
    getMeasuresWithThresholds: async (req, res) => {
        try {
            const result = await Measure.findMeasuresWithThreslholds();
            return res.status(200).json({
                status: "Succès",
                data: result
            })
        } catch (error) {
            return res.status(500).json({
                status: "Echec",
                message: "Erreur survenue lors de la récupération des messures avec seuils",
                error: error.message
            })
        }
    }
};

export default measureController;