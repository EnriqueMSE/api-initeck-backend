const express = require('express');
const CustomersController = require('./customersController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Customers
 *   description: API para gestionar clientes
 */

/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Crea un nuevo cliente
 *     tags: [Customers]
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
 *         description: Cliente creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/customers', CustomersController.createCustomers);

/**
 * @swagger
 * /customers:
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
router.get('/customers', CustomersController.getCustomers);

router.get('/customers/count', CustomersController.getCountCustomers);

router.get('/customers/most_frequent_products', CustomersController.getMostFrequentProducts);

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
router.get('/customers/:name', CustomersController.getCustomersByName);

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
router.delete('/customers/:id', CustomersController.deleteCustomers);

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
router.put('/customers/:id', CustomersController.updateCustomers);

module.exports = router;
