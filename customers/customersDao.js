
const connection = require('../db');

class CustomersDao {
  static async createCustomers(id_product, name, address, coordinates, status) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO customers (id_product, name, address, coordinates, status) VALUES (?, ?, ?, ?, ?)';
      connection.query(sql, [id_product, name, address, coordinates, status], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }

  // static async getCustomers() {
  //   return new Promise((resolve, reject) => {
  //     const sql = 'SELECT * FROM customers WHERE is_deleted = 0';
  //     connection.query(sql, (err, results) => {
  //       if (err) return reject(err);
  //       resolve(results);
  //     });
  //   });
  // }

  static async getCustomers() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT c.id as id, c.name as name, c.address as address, c.coordinates as coordinates, c.status as status, p.name as product FROM customers c LEFT JOIN products p ON c.id_product = p.id WHERE c.is_deleted = 0';
      connection.query(sql, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }

  // static async getMostFrequentProducts() {
  //   return new Promise((resolve, reject) => {
  //     const sql = 'SELECT id_product, COUNT(*) AS frequency FROM customers GROUP BY id_product ORDER BY frequency DESC';
  //     connection.query(sql, (err, results) => {
  //       if (err) return reject(err);
  //       resolve(results);
  //     });
  //   });
  // }

  static async getMostFrequentProducts() {
    return new Promise((resolve, reject) => {
      const sql = `
        SELECT p.name, c.id_product, COUNT(*) AS frequency
        FROM customers c
        JOIN products p ON c.id_product = p.id
        GROUP BY c.id_product, p.name
        ORDER BY frequency DESC
      `;
      connection.query(sql, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }
  

  static async getCountCustomers() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT COUNT(*) as count FROM customers WHERE is_deleted = 0 AND status = "ACTIVO" ';
      connection.query(sql, (err, results) => {
        if (err) return reject(err);
        resolve(results[0].count);
      });
    });
  }

  static async getCountInactive() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT COUNT(*) as count FROM customers WHERE is_deleted = 0 AND status = "INACTIVO" ';
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
      const sql = 'UPDATE customers SET is_deleted = 1 WHERE id = ? ';
      connection.query(sql, [id], (err, results) => {
        if (err) return reject(err);
          resolve(results);
      })
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

  static async updateStatus(id, status) {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE customers SET status = ? WHERE id = ? ';
      connection.query(sql, [status, id], (err, results) => {
        if (err) return reject(err);
          resolve(results);
      })
    })
  }

}

module.exports = CustomersDao;
