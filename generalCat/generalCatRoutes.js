const express = require('express');
const GeneralCatController = require('./generalCatController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: GeneralCat
 *   description: GeneralCat
 */

/**
 * @swagger
 * /generalCat:
 *      get:
 *      summary: Obtiene todas las categorías generales
 *      tags: [GeneralCat]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          code:
 *                              type: string
 *                          type:
 *                              type: string
 *                          name:
 *                              type: string
 *                          status:
 *                              type: string
 *      reponses:
 *          201:
 *              description: Created successfully
 *          400:
 *              description: Internal server error
 */

router.get('/general-cat', GeneralCatController.getAllGeneralCats);

/**
 * @swagger
 * /generalCat/{id}:
 *      get:
 *          summary: get a list of all general catalogues
 *          tags: [GeneralCat]
 *          responses:
 *              200:
 *                  description: list all general catalogues
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  type: object
 *                                  properties:
 *                                      id:
 *                                          type: integer
 *                                      code:
 *                                          type: string
 *                                      type:
 *                                          type: string
 *                                      name:
 *                                          type: string
 *                                      status:
 *                                          type: string
 */
router.post('/general-cat', GeneralCatController.createGeneralCat);

router.get('/general-cat/:id', GeneralCatController.updateStatus);

router.put('/general-cat/:id', GeneralCatController.updateGeneralCat);

module.exports = router;

// End of generalCatRoutes.js file
