import pool from "../config/database.js";

class Sensor {
    static async findAll() {
        const result = await pool.query(`
            SELECT
                s.id,
                s.name,
                s.type,
                s.battery,
                s.is_active,
                s.minimum_threshold,
                s.maximum_threshold,
                s.created_at,
                s.location_id,
                l.name AS location_name
            FROM sensor AS s
            JOIN location AS l ON s.location_id = l.id
            ORDER BY s.id ASC
            ;`);
        return result.rows;
    };

    static async findById(sensorId) {
        const result = await pool.query(`
                SELECT
                    s.id,
                    s.name,
                    s.type,
                    s.battery,
                    s.is_active,
                    s.minimum_threshold,
                    s.maximum_threshold,
                    s.created_at,
                    l.name AS location_name
                FROM sensor AS s
                JOIN location AS l ON s.location_id = l.id
                WHERE s.id = $1
                ORDER BY s.id ASC
            `, [sensorId]
        )
        return result.rows
    }
}

export default Sensor;