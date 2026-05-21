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
            ORDER BY m.id ASC
            `);
        return result.rows;
    };
};

export default Measure;