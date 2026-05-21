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
                status: "Echèc",
                message: "Erreur survenue lors de la récupération des messures",
                error: error.message
            });
        };
    },
};

export default measureController;