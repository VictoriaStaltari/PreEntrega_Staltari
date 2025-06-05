import { Router } from 'express';
import { generateMockUsers, generateMockPets } from '../utils/mocking.js';
import { insertMockData } from '../services/mockService.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Mocks
 *   description: Endpoints para generar datos simulados
 */

/**
 * @swagger
 * /api/mocks/mockingusers:
 *   get:
 *     summary: Generar usuarios simulados
 *     tags: [Mocks]
 *     responses:
 *       200:
 *         description: Lista de usuarios generados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */

router.get('/mockingusers', (req, res) => {
    const users = generateMockUsers(50);
    res.json(users);
});

/**
 * @swagger
 * /api/mocks/generateData:
 *   post:
 *     summary: Inserta datos simulados de usuarios y mascotas
 *     tags: [Mocks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               users:
 *                 type: integer
 *                 example: 50
 *               pets:
 *                 type: integer
 *                 example: 100
 *     responses:
 *       200:
 *         description: Datos generados e insertados con éxito
 *       400:
 *         description: Parámetros inválidos
 *       500:
 *         description: Error al insertar datos
 */

router.post('/generateData', async (req, res) => {
    const { users, pets } = req.body;

    if (!users || !pets || isNaN(users) || isNaN(pets)) {
        return res.status(400).json({ error: 'Parámetros inválidos' });
    }

    try {
        await insertMockData(parseInt(users), parseInt(pets));
        res.json({ message: 'Datos generados e insertados con éxito' });
    } catch (error) {
        res.status(500).json({ error: 'Error al insertar datos' });
    }
});

export default router;