const express = require('express');
const EnforceabilityController = require('./enforceabilityController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Transaction
 *   description: API para gestionar movimientos
 */

/**
 * @swagger
 * /payments:
 *   post:
 *     summary: Crea un nuevo movimiento
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               coordinates:
 *                 type: string
 *               product:
 *                 type: string
 *     responses:
 *       201:
 *         description: Movimiento creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/enforceability', EnforceabilityController.createEnforceability);

module.exports = router;
