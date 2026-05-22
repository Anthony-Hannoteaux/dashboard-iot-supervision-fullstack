import pool from "../config/database.js";

class Alert {
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
        return result.rows[0] || null
    }
}

export default Alert;