import { Router } from 'express';
import { generateMockUsers, generateMockPets } from '../utils/mocking.js';
import { insertMockData } from '../services/mockService.js';

const router = Router();

// Endpoint para obtener mascotas mockeadas
router.get('/mockingpets', (req, res) => {
    const pets = generateMockPets(100); // O el número que consideres
    res.json(pets);
});

// Endpoint para obtener usuarios mockeados
router.get('/mockingusers', (req, res) => {
    const users = generateMockUsers(50);
    res.json(users);
});

// Endpoint para generar e insertar datos en la DB
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
