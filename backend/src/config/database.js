import pg from "pg";
import dotenv from "dotenv";

dotenv.config()

const { Pool } = pg;

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

/**
 * Méthode prmettant d'écouter les événements émis par le pool de connexion
 * Affiche les erreurs pouvant arriver sur les clients inactifs du pool
 * @link https://node-postgres.com/apis/pool#error
 */
pool.on('error', (error) => {
    console.error(`Erreur rencontrer avec le pool de connexion PostgreSQL`, error);
});

export default pool;