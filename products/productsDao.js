// daos/productoDao.js
const connection = require('../db');

class ProductsDao {
  static async crearProducto(name, description, price) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO products (name, description, price) VALUES (?, ?, ?)';
      connection.query(sql, [name, description, price], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }

  static async getAllProducts() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM products WHERE is_deleted = 0';
      connection.query(sql, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }

  static async eliminarProducto(id) {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE products SET is_deleted = 1 WHERE id = ?';
      connection.query(sql, [id], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }

  static async editarProducto(id, name, description, price) {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE products SET name = ?, description = ?, price = ? WHERE id = ?';
      connection.query(sql, [name, description, price, id], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }

}

module.exports = ProductsDao;
