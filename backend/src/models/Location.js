import pool from "../config/database.js";

class Location {
    #id;
    #name;

    constructor(config) {
        this.#id = config.id;
        this.#name = config.name;
    };

    // Getters
    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    // Setters
    set id(value) {
        this.#id = value
    }

    set name(value) {
        if (typeof value !== "string") {
            throw new Error("La valeur attendu doit être une chaîne de caractère.")
        }
        this.#name = value
    }

    // Methodes
    
    // Permet d'afficher l'ensemble des salles
    static async findAll() {
        const result = await pool.query(`
            SELECT
                id,
                name
            FROM location
            ORDER BY "id" ASC
            ;`);

        return result.rows
    }
};

export default Location;