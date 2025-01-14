// controllers/productoController.js
const ProductsDao = require('./productsDao');

class ProductsController {
  static async createProduct(req, res) {
    try {
      const { name, description, price } = req.body;
      await ProductsDao.crearProducto(name, description, price);
      res.status(200).json({ message: 'Producto recibido correctamente' });
    } catch (err) {
      console.error('Error al crear producto:', err);
      res.status(500).json({ message: 'Error al guardar el producto' });
    }
  }

  static async getAllProducts(req, res) {
    try {
      const products = await ProductsDao.getAllProducts();
      res.status(200).json(products);
    } catch (err) {
      console.error('Error al obtener productos:', err);
      res.status(500).json({ message: 'Error al obtener productos' });
    }
  }

  static async editProduct(req, res) {
    try {
      const { id } = req.params;
      const { name, description, price } = req.body;
      await ProductsDao.editarProducto(id, name, description, price);
      res.status(200).json({ message: 'Producto editado correctamente' });
    } catch (err) {
      console.error('Error al editar producto:', err);
      res.status(500).json({ message: 'Error al editar el producto' });
    }
  }

  static async detedProduct(req, res) {
    try {
      const { id } = req.params;
      await ProductsDao.eliminarProducto(id);
      res.status(200).json({ message: 'Producto eliminado correctamente' });
    } catch (err) {
      console.error('Error al eliminar producto:', err);
      res.status(500).json({ message: 'Error al eliminar el producto' });
    }
  }

}

module.exports = ProductsController;
