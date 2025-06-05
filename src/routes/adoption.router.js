import { Router } from 'express';

const router = Router();

// Array en memoria para simular base de datos
let adopciones = [];

/**
 * @swagger
 * tags:
 *   name: Adoptions
 *   description: Endpoints para gestionar adopciones
 */

/**
 * @swagger
 * /api/adoptions:
 *   get:
 *     summary: Obtener todas las adopciones
 *     tags: [Adoptions]
 *     responses:
 *       200:
 *         description: Lista de adopciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */

router.get('/', (req, res) => {
    res.status(200).json(adopciones);
});

/**
 * @swagger
 * /api/adoptions:
 *   post:
 *     summary: Crear una nueva adopción
 *     tags: [Adoptions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               petId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Adopción creada exitosamente
 */

router.post('/', (req, res) => {
    const { userId, petId } = req.body;
    if (!userId || !petId) {
        return res.status(400).json({ error: 'Datos incompletos' });
    }

    const nuevaAdopcion = {
        id: String(Date.now()),
        userId,
        petId
    };

    adopciones.push(nuevaAdopcion);
    res.status(201).json({ message: 'Adopción creada', adopcion: nuevaAdopcion });
});

/**
 * @swagger
 * /api/adoptions/{id}:
 *   get:
 *     summary: Obtener una adopción por ID
 *     tags: [Adoptions]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la adopción
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Adopción encontrada
 *       404:
 *         description: Adopción no encontrada
 */

router.get('/:id', (req, res) => {
    const adopcion = adopciones.find(a => a.id === req.params.id);
    if (!adopcion) {
        return res.status(404).json({ error: 'Adopción no encontrada' });
    }
    res.status(200).json(adopcion);
});

/**
 * @swagger
 * /api/adoptions/{id}:
 *   delete:
 *     summary: Eliminar una adopción por ID
 *     tags: [Adoptions]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la adopción a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Adopción eliminada
 *       404:
 *         description: Adopción no encontrada
 */
router.delete('/:id', (req, res) => {
    const index = adopciones.findIndex(a => a.id === req.params.id);
    if (index === -1) {
        return res.status(404).json({ error: 'Adopción no encontrada' });
    }

    adopciones.splice(index, 1);
    res.status(200).json({ message: 'Adopción eliminada' });
});

export default router;