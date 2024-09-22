
const connection = require('../db');

class TransactionsDao {
    static async createEnforceability() {
        return new Promise((resolve, reject) => {
            const sql = `
                INSERT INTO enforceability (id_customer, id_product, amount, contract, status)
                SELECT c.id, c.id_product, p.price, c.contract, 1
                FROM customers c
                JOIN products p
                ON p.id = c.id_product
                WHERE c.is_deleted = 0
                AND c.status = 'ACTIVO';`;
            connection.query(sql, (err, results) => {
                if (err) return reject(err);
                    resolve(results);
                }
            );
        });
    }
}

module.exports = TransactionsDao;