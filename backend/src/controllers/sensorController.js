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
};

export default sensorController;