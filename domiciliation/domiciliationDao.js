

const connection = require('../db');

class DomiciliationDao {
    static async createDomiciliation() {
        return new Promise((resolve, reject) => {
            // Actualiza el status a 0 si el amount coincide --
            const sql = `
                UPDATE db_test2.enforceability e
                JOIN db_test2.transactions t
                ON e.id_customer = t.id_customer
                AND e.amount = t.amount
                SET e.status = 0
                WHERE MONTH(t.created_at) = MONTH(CURDATE())
                AND YEAR(t.created_at) = YEAR(CURDATE());
                `;
            connection.query(sql, (err, results) => {
                if (err) return reject(err);
                    resolve(results);
                    createDomiciliation2();
                }
            );
        });
    }

    static async createDomiciliation2() {
        return new Promise((resolve, reject) => {
            // -- Actualiza el amount y status si el amount de la transacción es menor
            const sql = `
                UPDATE db_test2.enforceability e
                JOIN db_test2.transactions t
                ON e.id_customer = t.id_customer
                AND e.amount > t.amount
                SET e.amount = e.amount - t.amount,
                e.status = 1
                WHERE MONTH(t.created_at) = MONTH(CURDATE())
                AND YEAR(t.created_at) = YEAR(CURDATE());`;
            connection.query(sql, (err, results) => {
                if (err) return reject(err);
                    resolve(results);
                }
            );
        });
    }
}

module.exports = DomiciliationDao;