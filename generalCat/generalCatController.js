
const GeneralCatDao = require('./generalCatDao');

class GeneralCatController {

    static async createGeneralCat(req, res) {
        try {
            const { code, type, name, status } = req.body;
            await GeneralCatDao.createGeneralCat(code, type, name, status);
            res.status(200).json({ message: 'Catálogo general creado correctamente' });
        } catch (err) {
            console.error('Error al crear el catálogo general:', err);
            res.status(500).json({ message: 'Error al crear el catálogo general' });
        }
    }

    static async getAllGeneralCats(req, res) {
        try {
            const cat = await GeneralCatDao.getAllGeneralCats();
            res.status(200).json(cat);
        } catch (err) {
            console.error('Error al obtener los catálogos generales:', err);
            res.status(500).json({ message: 'Error al obtener los catálogos generales' });
        }
    }

    static async updateStatus(req, res) {
        const { id } = req.params;
        const { status } = req.params;
        try {
          await GeneralCatDao.updateStatus(id, status);
          res.status(200).json({ message: 'Status actualizado correctamente' });
        } catch (err) {
          console.error('Error al actualizar status:', err);
          res.status(500).json({ message: 'Error al actualizar el status' });
        }
    }

}

module.exports = GeneralCatController;