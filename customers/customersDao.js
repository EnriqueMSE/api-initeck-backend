
const connection = require('../db');

class CustomersDao {
  static async createCustomers(name, address, coordinates, product) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO customers (name, address, coordinates, product) VALUES (?, ?, ?, ?)';
      connection.query(sql, [name, address, coordinates, product], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }

  static async getCustomers() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM customers';
      connection.query(sql, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }

  static async getMostFrequentProducts() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT product, COUNT(*) AS frequency FROM customers GROUP BY product ORDER BY frequency DESC';
      connection.query(sql, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }

  static async getCountCustomers() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT COUNT(*) as count FROM customers WHERE is_deleted = 0';
      connection.query(sql, (err, results) => {
        if (err) return reject(err);
        resolve(results[0].count);
      });
    });
  }

  static async getCustomersByName(name) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM customers WHERE name =?';
      connection.query(sql, [name], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }

  static async deleteCustomers(id) {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE customers SET is_deleted = 1 WHERE id = ?';
      connection.query(sql, [id], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }

  static async updateCustomers(id, name, address, coordinates, product) {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE customers SET name = ?, address = ?, coordinates = ?, product = ? WHERE id = ?';
      connection.query(sql, [name, address, coordinates, product, id], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }

}

module.exports = CustomersDao;
