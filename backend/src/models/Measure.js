import pool from "../config/database.js";

class Measure {
    static async findAll() {
        const result = await pool.query(`
            SELECT
                m.id,
                m.value,
                m.unit,
                m.recorded_at,
                m.sensor_id,
                s.name AS sensor_name
            FROM measure AS m
            JOIN sensor AS s ON m.sensor_id = s.id
            ORDER BY m.recorded_at ASC;
            `);
        return result.rows;
    };

    
    // Requête permettant d'afficher les mesures d'un capteur (par son ID)
    /**
     * On sécurise notre requête contre de potentiel injection SQL
     * Par l'intermédiaire d'une requête paramétrée en passant les valeurs à assainir dans un tableau
     */
    static async findMeasureBySensorId(sensorId) {
        const result = await pool.query(`
            SELECT
                m.id,
                m.value,
                m.unit,
                m.recorded_at,
                s.id AS sensor_id,
                s.name AS sensor_name,
                l.id AS location_id,
                l.name AS location_name
            FROM measure AS m
            JOIN sensor AS s ON sensor_id = s.id
            JOIN location AS l ON s.location_id = l.id
            WHERE s.id = $1
            ORDER BY m.recorded_at ASC;
        `,
        [sensorId]
        )
        return result.rows
    };
};

export default Measure;