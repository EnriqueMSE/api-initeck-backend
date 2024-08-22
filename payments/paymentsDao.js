
const connection = require('../db');

class PaymentsDao {
  static async createPayments(customer, product, quantity) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO payments (customer, product, quantity) VALUES (?, ?, ?)';
      connection.query(sql, [customer, product, quantity], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }

  // static async getCustomers() {
  //   return new Promise((resolve, reject) => {
  //     const sql = 'SELECT * FROM customers';
  //     connection.query(sql, (err, results) => {
  //       if (err) return reject(err);
  //       resolve(results);
  //     });
  //   });
  // }

  // static async getCustomersByName(name) {
  //   return new Promise((resolve, reject) => {
  //     const sql = 'SELECT * FROM customers WHERE name =?';
  //     connection.query(sql, [name], (err, results) => {
  //       if (err) return reject(err);
  //       resolve(results);
  //     });
  //   });
  // }

  // static async deleteCustomers(id) {
  //   return new Promise((resolve, reject) => {
  //     const sql = 'UPDATE customers SET is_deleted = 1 WHERE id = ?';
  //     connection.query(sql, [id], (err, results) => {
  //       if (err) return reject(err);
  //       resolve(results);
  //     });
  //   });
  // }

  // static async updateCustomers(id, name, address, coordinates, product) {
  //   return new Promise((resolve, reject) => {
  //     const sql = 'UPDATE customers SET name = ?, address = ?, coordinates = ?, product = ? WHERE id = ?';
  //     connection.query(sql, [name, address, coordinates, product, id], (err, results) => {
  //       if (err) return reject(err);
  //       resolve(results);
  //     });
  //   });
  // }

}

module.exports = PaymentsDao;
