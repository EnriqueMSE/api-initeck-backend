
const EnforceabilityDao = require('./enforceabilityDao');

class EnforceabilityController {
  static async createEnforceability(req, res) {
    let create_at = new Date();
    let update_at = new Date();
    const { customer, product, type, payment_method, amount } = req.body;
    try {
      await EnforceabilityDao.createEnforceability(customer, product, type, payment_method, amount, create_at, update_at);
      res.status(200).json({ message: 'Movimiento recibido correctamente' });
    } catch (err) {
      console.error('Error al crear el movimiento:', err);
      res.status(500).json({ message: 'Error al guardar el movimiento' });
    }
  }

  static async createEnforceability(req, res) {
    try {
      await TransactionsDao.createEnforceability();
      res.status(200).json({ message: 'Obligación creada correctamente' });
    } catch (err) {
      console.error('Error al crear la obligación:', err);
      res.status(500).json({ message: 'Error al crear la obligación' });
    }
  }

}

module.exports = EnforceabilityController;
