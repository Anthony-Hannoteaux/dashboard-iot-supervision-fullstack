import Location from "../models/Location.js";

const locationController = {
    // Route GET /api/location
    getAllLocation: async (req, res) => {
        try {
            const result = await Location.findAll();
            return res.status(200).json({
                status: "Succès",
                data: result
            });
        } catch (error) {
            return res.status(500).json({
                status: "Echec",
                message: "Erreur survenue lors de la récupération des localisations",
                error: error.message
            });
        };
    },
};

export default locationController;