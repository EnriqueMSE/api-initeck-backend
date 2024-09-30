
const CustomersDao = require('./customersDao');

class CustomersController {
  static async createCustomers(req, res) {
    try {
      const { id_product, name, address, coordinates, status, contract, account, email } = req.body;
      await CustomersDao.createCustomers(id_product, name, address, coordinates, status, contract, account, email);
      res.status(200).json({ message: 'Customer recibido correctamente' });
    } catch (err) {
      console.error('Error al crear producto:', err);
      res.status(500).json({ message: 'Error al guardar el producto' });
    }
  }

  static async getCustomers(req, res) {
    try {
      const customers = await CustomersDao.getCustomers();
      res.status(200).json(customers);
    } catch (err) {
      console.error('Error al obtener clientes:', err);
      res.status(500).json({ message: 'Error al obtener clientes' });
    }
  }

  static async getCountCustomers(req, res) {
    try {
      const count = await CustomersDao.getCountCustomers();
      res.status(200).json({ count });
    } catch (e) {
      console.error('Error al obtener cantidad de clientes:', e);
      res.status(500).json({ message: 'Error al obtener la cantidad de clientes' });
    }
  }

  static async getCountInactive(req, res) {
    try {
      const count = await CustomersDao.getCountInactive();
      res.status(200).json({ count });
    } catch (e) {
      console.error('Error al obtener cantidad de clientes inactivos:', e);
      res.status(500).json({ message: 'Error al obtener la cantidad de clientes inactivos' });
    }
  }

  static async getMostFrequentProducts(req, res) {
    try {
      const getMostFrequentProducts = await CustomersDao.getMostFrequentProducts();
      res.status(200).json(getMostFrequentProducts);
    } catch (e) {
      console.error('Error al obtener productos más frecuentes:', e);
      res.status(500).json({ message: 'Error al obtener productos más frecuentes' });
    }
  }

  static async getCustomersByName(req, res) {
    const { name } = req.params;
    try {
      const customer = await CustomersDao.getCustomersByName(name);
      res.status(200).json(customer);
    } catch (err) {
      console.error('Error al obtener productos:', err);
      res.status(500).json({ message: 'Error al obtener productos' });
    }
  }

  static async updateCustomers(req, res) {
    try {
      const { id } = req.params;
      const { id_product, name, address, coordinates, status, contract, account, email } = req.body;
      await CustomersDao.updateCustomers(id, id_product, name, address, coordinates, status, contract, account, email);
      res.status(200).json({ message: 'Producto editado correctamente' });
    } catch (err) {
      console.error('Error al editar producto:', err);
      res.status(500).json({ message: 'Error al editar el producto' });
    }
  }

  static async updateStatus(req, res) {
    const { id } = req.params;
    const { status } = req.params;
    try {
      await CustomersDao.updateStatus(id, status);
      res.status(200).json({ message: 'Status actualizado correctamente' });
    } catch (err) {
      console.error('Error al actualizar status:', err);
      res.status(500).json({ message: 'Error al actualizar el status' });
    }
  }

  static async deleteCustomers(req, res) {
    try {
      const { id } = req.params;
      await CustomersDao.deleteCustomers(id);
      res.status(200).json({ message: 'Producto eliminado correctamente' });
    } catch (err) {
      console.error('Error al eliminar producto:', err);
      res.status(500).json({ message: 'Error al eliminar el producto' });
    }
  }
}

module.exports = CustomersController;
