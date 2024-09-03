
const connection = require('../db');

class TransactionsDao {
  static async createTransactions(customer, product, type, payment_method, amount, create_at, update_at) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO transactions (customer, product, type, payment_method, create_at, update_at) VALUES (?, ?, ?, ?, ?, ?)';
      connection.query(sql, [customer, product, type, payment_method, amount, create_at, update_at], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }

  static async getTransactions() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM transactions';
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
