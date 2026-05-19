import pool from "../config/database.js";

const healthController = {
    // On vérifie que l'API démarre correctement
    getHealth: (req, res) => {
        res.status(200).json({
            status: "OK",
            message: "API Dashboard IoT à bien démarré",
            timestamp: new Date().toISOString()
        });
    },

    // On vérifie que l'API interroge correctement PostgreSQL
    getDatabaseHealth: async (req, res) => {
        const result = await pool.query(`
            SELECT NOW() AS current_time
            `)
        try {
            res.status(200).json({
                status: "OK",
                message: "Connexion avec PostgreSQL établi avec succès",
                databaseTime: result.rows[0].current_time
            })
        } catch (error) {
            res.status(500).json({
                status: 'Erreur',
                message: "Connexion avec PostgreSQL échoué",
                error: error.message
            })
        }
    }
};

export default healthController;