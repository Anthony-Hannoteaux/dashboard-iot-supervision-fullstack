import Sensor from "../models/Sensor.js";

const sensorController = {
    // Route GET /api/sensors
    getAllSensor: async (req, res) => {
        try {

            const result = await Sensor.findAll();
            return res.status(200).json({
                status: "Succès",
                data: result
            });

        } catch (error) {
            return res.status(500).json({
                status: "Echec",
                message: "Erreur survenue lors de la récupération des capteurs",
                error: error.message
            });
        };
    },

    // Route GET /api/sensors:sensorid
    getSensorById: async (req, res) => {
        try {
            const sensorId = Number(req.params.sensorId)
            // On vérifie la validité du paramètre URL récupéré
            if (!Number.isInteger(sensorId) || sensorId <= 0) {
                return res.status(400).json({
                    status: "Echec",
                    message: "L'identifiant du capteur est invalide",
                })
            }
            
            const result = await Sensor.findById(sensorId);
            return res.status(200).json({
                status: "Succès",
                data: result
            })

        } catch (error) {
            return res.status(500).json({
                status: "Echec",
                message: "Erreur survenue lors de la récupération du capteur",
                error: error.message
            });
        }
    }
};

export default sensorController;