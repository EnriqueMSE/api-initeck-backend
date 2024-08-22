
const PaymentsDao = require('./paymentsDao');

class PaymentsController {
  static async createPayments(req, res) {
    const { customer, product, quantity } = req.body;
    try {
      await PaymentsDao.createPayments(customer, product, quantity);
      res.status(200).json({ message: 'Payments recibido correctamente' });
    } catch (err) {
      console.error('Error al crear producto:', err);
      res.status(500).json({ message: 'Error al guardar el producto' });
    }
  }

  // static async getPayments(req, res) {
  //   try {
  //     const payments = await PaymentsDao.getPayments();
  //     res.status(200).json(payments);
  //   } catch (err) {
  //     console.error('Error al obtener productos:', err);
  //     res.status(500).json({ message: 'Error al obtener productos' });
  //   }
  // }

  // static async getPaymentsByName(req, res) {
  //   const { name } = req.params;
  //   try {
  //     const pay = await PaymentsDao.getPayByName(name);
  //     res.status(200).json(pay);
  //   } catch (err) {
  //     console.error('Error al obtener productos:', err);
  //     res.status(500).json({ message: 'Error al obtener productos' });
  //   }
  // }

  // static async updatePay(req, res) {
  //   try {
  //     const { id } = req.params;
  //     const { name, address, coordinates, product } = req.body;
  //     await PaymentsDao.updatePay(id, name, address, coordinates, product);
  //     res.status(200).json({ message: 'Producto editado correctamente' });
  //   } catch (err) {
  //     console.error('Error al editar producto:', err);
  //     res.status(500).json({ message: 'Error al editar el producto' });
  //   }
  // }

  // static async deletePay(req, res) {
  //   try {
  //     const { id } = req.params;
  //     await PaymentsDao.updatePay(id);
  //     res.status(200).json({ message: 'Producto eliminado correctamente' });
  //   } catch (err) {
  //     console.error('Error al eliminar producto:', err);
  //     res.status(500).json({ message: 'Error al eliminar el producto' });
  //   }
  // }

}

module.exports = PaymentsController;
