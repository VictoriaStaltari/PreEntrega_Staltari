import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints para gestión de usuarios
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Lista de usuarios
 */

router.get('/', (req, res) => {
    res.json({ message: 'Lista de usuarios' });
});

export default router;