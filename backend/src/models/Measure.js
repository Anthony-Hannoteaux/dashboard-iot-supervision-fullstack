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

    /**
     * Requête permettant de récupérer les valeurs nécessaire au calcul d'une alerte :
     * - Les IDs, valeurs, unités et date d'enregistrement des MESURES
     * - Les IDs, noms, types, seuils limites des CAPTEURS
     * - Les IDs et noms des LOCALISATIONS
     * - ORDONNEES de la plus récente à la plus ancienne
     */
    static async findMeasuresWithThreslholds() {
        const result = await pool.query(`
            SELECT
                m.id AS measure_id,
                m.value,
                m.unit,
                m.recorded_at,
                s.id AS sensor_id,
                s.name AS sensor_name,
                s.type,
                s.minimum_threshold,
                s.maximum_threshold,
                l.id AS location_id,
                l.name AS location_name
            FROM measure AS m
            JOIN sensor AS s ON m.sensor_id = s.id
            JOIN location AS l ON s.location_id = l.id
            ORDER BY m.recorded_at DESC;
            `);
        return result.rows;
    };
    /**
     * Requête permettant de récupérer les mesures en fonction d'une période prédéfinie
     * On crée une table provisoire (Common Table Expressions) pour simplifier notre requête :
     *  - Les périodes seront calculées en fonction de la date de la dernière mesures + 10min (théoriquement "heure actuelle")
     * On extrait les données de notre table measure
     * On utilise CROSS JOIN pour rendre accessible la valeur de notre CTE (une ligne donc CROSS JOIN maîtrisé)
     * On conditionne la réponse renvoyée pour récupérer les mesures en fonction de la période voulu :
     *  - Dernière heure
     *  - Dernières 24 heures
     *  - Dernière semaine
     *  Pour plus de détails les ressources utilisées sont disponible dans le fichier README.md : Ressources -> SQL
     */
    static async findSensorMeasuresByPeriod(sensorId, period) {
        const result = await pool.query(`
            WITH last_measure AS (
                SELECT
                    MAX(recorded_at) + INTERVAL '10 minutes' AS reference_at
                FROM measure
                WHERE sensor_id = $1
            )
            SELECT
                m.id,
                m.value,
                m.unit,
                m.recorded_at AS "recordedAt",
                m.sensor_id AS "sensorId"
            FROM measure AS m
            CROSS JOIN last_measure AS lm
            WHERE m.sensor_id = $1
            AND (
                CASE
                    WHEN $2 = 'last-hour' THEN
                        m.recorded_at >= lm.reference_at - INTERVAL '1 hour'
                        AND m.recorded_at <= lm.reference_at

                    WHEN $2 = 'last-day' THEN
                        m.recorded_at >= lm.reference_at - INTERVAL '24 hours'
                        AND m.recorded_at <= lm.reference_at - INTERVAL '1 hour'

                    WHEN $2 = 'last-week' THEN
                        m.recorded_at >= lm.reference_at - INTERVAL '7 days'
                        AND m.recorded_at <= lm.reference_at - INTERVAL '1 day'

                    ELSE false 
                END
            )
            ORDER BY m.recorded_at ASC;            
            `, [
                sensorId,
                period
            ])
        return result.rows
    }
};

export default Measure;