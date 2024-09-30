
const connection = require('../db');

class GeneralCatDao {

    static async createGeneralCat(code, type, name, status) {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO general_catalogues (code, type, name, status) VALUES (?,?,?,?)';
            connection.query(sql, [code, type, name, status], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    }

    static async getAllGeneralCats() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM general_catalogues WHERE status = "ACTIVO"';
            connection.query(sql, (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    }

    static async updateGeneralCat(id, code, type, name, status) {
        return new Promise((resolve, reject) => {
            const sql = 'UPDATE general_catalogues SET code = ?, type = ?, name = ?, status = ? WHERE id = ?';
            connection.query(sql, [code, type, name, status, id], (err, results) => {
            if (err) return reject(err);
                resolve(results);
            });
        });
    }

    static async updateStatus(id, status) {
        return new Promise((resolve, reject) => {
          const sql = 'UPDATE general_catalogues SET status = ? WHERE id = ? ';
          connection.query(sql, [status, id], (err, results) => {
            if (err) return reject(err);
              resolve(results);
          })
        })
    }
}

module.exports = GeneralCatDao;