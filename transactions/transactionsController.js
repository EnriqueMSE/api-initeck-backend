
const TransactionsDao = require('./transactionsDao');

class TransactionsController {
  static async createTransactions(req, res) {
    let create_at = new Date();
    let update_at = new Date();
    const { customer, product, type, payment_method } = req.body;
    try {
      await TransactionsDao.createTransactions(customer, product, type, payment_method, create_at, update_at);
      res.status(200).json({ message: 'Movimiento recibido correctamente' });
    } catch (err) {
      console.error('Error al crear el movimiento:', err);
      res.status(500).json({ message: 'Error al guardar el movimiento' });
    }
  }

  static async getTransactions(req, res) {
    try {
      const transactions = await TransactionsDao.getTransactions();
      res.status(200).json(transactions);
    } catch (err) {
      console.error('Error al obtener los movimientos:', err);
      res.status(500).json({ message: 'Error al obtener los movimientos' });
    }
  }

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

  static async updateTransactions(req, res) {
    try {
      const { id } = req.params;
      const { customer, product, type, payment_method } = req.body;
      await PaymentsDao.updatePay(id, customer, product, type, payment_method);
      res.status(200).json({ message: 'Movimiento editado correctamente' });
    } catch (err) {
      console.error('Error al editar el movimiento:', err);
      res.status(500).json({ message: 'Error al editar el movimiento' });
    }
  }

  static async deleteTransactions(req, res) {
    try {
      const { id } = req.params;
      await TransactionsDao.updateTransactions(id);
      res.status(200).json({ message: 'Movimiento eliminado correctamente' });
    } catch (err) {
      console.error('Error al eliminar el movimiento:', err);
      res.status(500).json({ message: 'Error al eliminar el movimiento' });
    }
  }

}

module.exports = TransactionsController;
