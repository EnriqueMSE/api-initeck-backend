const express = require('express');
const TransactionsController = require('./transactionsController');

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
router.post('/transactions', TransactionsController.createTransactions);

/**
 * @swagger
 * /payments:
 *   get:
 *     summary: Obtiene una lista de clientes
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: Lista de clientes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   address:
 *                     type: string
 *                   coordinates:
 *                     type: string
 *                   product:
 *                     type: string
 */
router.get('/transactions', TransactionsController.getTransactions);

/**
 * @swagger
 * /customers/{name}:
 *   get:
 *     summary: Obtiene un cliente por nombre
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre del cliente
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *       404:
 *         description: Cliente no encontrado
 */
// router.get('/transactions/:name', TransactionsController.getTransactionsByName);

/**
 * @swagger
 * /customers/{id}:
 *   delete:
 *     summary: Elimina un cliente por ID
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del cliente
 *     responses:
 *       200:
 *         description: Cliente eliminado
 *       404:
 *         description: Cliente no encontrado
 */
router.delete('/transactions/:id', TransactionsController.deleteTransactions);

/**
 * @swagger
 * /customers/{id}:
 *   put:
 *     summary: Actualiza un cliente por ID
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del cliente
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
 *       200:
 *         description: Cliente actualizado
 *       404:
 *         description: Cliente no encontrado
 */
router.put('/transactions/:id', TransactionsController.updateTransactions);

router.get('/enforceability', TransactionsController.createEnforceability);

module.exports = router;
