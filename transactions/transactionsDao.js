
const connection = require('../db');

class TransactionsDao {
  static async createTransactions(id_customer, id_product, id_type, id_payment_method, amount, created_at, updated_at) {
    console.log(id_customer, id_product, id_type, id_payment_method, amount, created_at, updated_at);
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO transactions (id_customer, id_product, id_type, id_payment_method, amount, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)';
      connection.query(sql, [id_customer, id_product, id_type, id_payment_method, amount, created_at, updated_at], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }

  static async createEnforceability() {
    return new Promise((resolve, reject) => {
      const sql = `
        INSERT INTO enforceability (id_customer, id_product, amount, status)
        SELECT c.id, t.id_product, t.amount, 'active'
        FROM customers c
        JOIN transactions t ON t.id_customer = c.id
        WHERE c.status = 'ACTIVO'
        AND c.is_deleted = 0
        AND MONTH(t.created_at) = MONTH(CURDATE())
        AND YEAR(t.created_at) = YEAR(CURDATE());`;
      connection.query(sql, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }  

  static async getTransactions() {
    return new Promise((resolve, reject) => {
      // const sql = 'SELECT * FROM transactions t JOIN customers c ON t.id_customer';
      const sql = `SELECT t.id, c.name AS customer, p.name AS product, gc.name AS type, gc2.name AS payment_method, t.amount
                  FROM transactions t
                  JOIN customers c
                  ON c.id = t.id_customer
                  JOIN products p 
                  ON p.id = t.id_product
                  JOIN general_catalogues gc
                  ON gc.id = t.id_type
                  JOIN general_catalogues gc2
                  ON gc2.id = t.id_payment_method
                  WHERE MONTH(t.created_at) = MONTH(CURDATE())
                  AND YEAR(t.created_at) = YEAR(CURDATE());`
      connection.query(sql, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }

  // static async getCustomersByName(name) {
  //   return new Promise((resolve, reject) => {
  //     const sql = 'SELECT * FROM customers WHERE name =?';
  //     connection.query(sql, [name], (err, results) => {
  //       if (err) return reject(err);
  //       resolve(results);
  //     });
  //   });
  // }

  static async deleteTransactions(id) {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE transactions SET is_deleted = 1 WHERE id = ?';
      connection.query(sql, [id], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }

  static async updateTransactions(id, customer, product, type, payment_method, amount) {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE transactions SET customer = ?, product = ?, type = ?, payment_method = ?, amount = ? WHERE id = ?';
      connection.query(sql, [customer, product, type, payment_method, id, amount], (err, results) => {
        if (err) return reject(err);
          resolve(results);
      });
    });
  }

}

module.exports = TransactionsDao;
