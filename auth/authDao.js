// import { createPool } from 'mysql2/promise';
const connection = require('../db');

class AuthDao {

    static async getUserByEmail(email) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM users WHERE email = ?'; // Filtrar por email
            connection.query(sql, [email], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            });
        });
    }

    static async createUser(email, password) {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
            connection.query(sql, [email, password], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    }
}

module.exports = AuthDao;

