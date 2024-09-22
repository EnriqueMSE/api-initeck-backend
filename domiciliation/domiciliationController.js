
const DomiciliationDao = require('./domiciliationDao');

class DomiciliationController {
  static async createDomiciliation(req, res) {
    try {
      await DomiciliationDao.createDomiciliation();
      res.status(200).json({ message: 'Movimiento recibido correctamente' });
    } catch (err) {
      console.error('Error al crear el movimiento:', err);
      res.status(500).json({ message: 'Error al guardar el movimiento' });
    }
  }

}

module.exports = DomiciliationController;
