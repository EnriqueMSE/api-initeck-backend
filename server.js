// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const authRouter = require('./auth/authRoutes');
const productsRoutes = require('./products/productsRoutes');
const customersRoutes = require('./customers/customersRoutes');
const transactionsRoutes = require('./transactions/transactionsRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Configuración de Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de',
      version: '1.0.0',
      description: 'Documentación de la API',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
        description: 'Servidor local',
      },
    ],
  },
  apis: [
    './auth/authRoutes.js',
    './products/productsRoutes.js',
    './customers/customersRoutes.js',
    './transactions/transactionsRoutes.js'
    // './errorMiddleware.js',  // Middleware para manejar errores globales
  ],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Configurar CORS
app.use(cors());

// Configurar body-parser para analizar JSON
app.use(bodyParser.json());

// Documentación de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Usar rutas
app.use('/api', authRouter);
app.use('/api', productsRoutes);
app.use('/api', customersRoutes);
app.use('/api', transactionsRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
    console.log(`API documentation available at http://localhost:${port}/api-docs`);
});
