import pool from "../config/database.js";

class Alert {
    static async findAll() {
        const result = await pool.query(
            `SELECT
                a.id AS alert_id,
                a.alert_type,
                a.urgency_degree,
                a.message,
                a.is_active AS alert_is_active,
                a.threshold_value,
                a.created_at AS alert_created_at,
                a.resolved_at AS alert_resolved_at,
                a.measure_id AS measure_id,
                m.value,
                m.unit,
                m.recorded_at AS measure_recorded_at,
                m.sensor_id AS sensor_id,
                s.name AS sensor_name,
                s.type,
                s.location_id AS location_id,
                l.name AS location_name
            FROM alert AS a
            JOIN measure AS m ON a.measure_id = m.id
            JOIN sensor AS s ON m.sensor_id = s.id
            JOIN location AS l ON s.location_id = l.id
            ORDER BY a.created_at DESC
        ;`)

        return result.rows;
    }

    static async create(alert) {
        /**
         * Note :
         * Nos contraintes SQL pourraient générées des conflits lors de la génération de nouvelles alertes
         * Utilisation de la clause facultative ON CONFLICT DO NOTHING
         * Permet donc de ne pas enregistrer de nouvelles lignes en cas de conflits
         * @link https://www.postgresql.org/docs/current/sql-insert.html#SQL-ON-CONFLICT
         */
        const result = await pool.query(`
            INSERT INTO alert (
                alert_type,
                urgency_degree,
                message,
                threshold_value,
                measure_id
            )
            VALUES ($1, $2, $3, $4, $5)
            ON CONFLICT (measure_id) DO NOTHING
            RETURNING
                id,
                alert_type,
                urgency_degree,
                message,
                is_active,
                threshold_value,
                created_at,
                resolved_at,
                measure_id
            `,
        [
            alert.alert_type,
            alert.urgency_degree,
            alert.message,
            alert.threshold_value,
            alert.measure_id
        ])
        return result
    }
}

export default Alert;