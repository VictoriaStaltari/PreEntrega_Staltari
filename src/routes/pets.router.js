import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Pets
 *   description: Endpoints para gestionar mascotas
 */

/**
 * @swagger
 * /api/pets:
 *   get:
 *     summary: Obtener la lista de mascotas
 *     tags: [Pets]
 *     responses:
 *       200:
 *         description: Lista de mascotas obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Lista de mascotas
 */

router.get('/', (req, res) => {
    res.json({ message: 'Lista de mascotas' });
});

export default router;