import request from 'supertest';
import app from '../src/app.js';

describe('Tests funcionales para /api/adoptions', () => {
    let adopcionId = null;

    it('GET /api/adoptions - debería devolver un array vacío al inicio', async () => {
        const response = await request(app).get('/api/adoptions');
            expect(response.statusCode).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
    });

    it('POST /api/adoptions - debería crear una adopción correctamente', async () => {
        const nuevaAdopcion = {
            userId: 'user123',
            petId: 'pet456'
        };

    const response = await request(app)
    .post('/api/adoptions')
    .send(nuevaAdopcion);

    expect(response.statusCode).toBe(201);
    expect(response.body.adopcion).toBeDefined();
    expect(response.body.adopcion.userId).toBe(nuevaAdopcion.userId);
    expect(response.body.adopcion.petId).toBe(nuevaAdopcion.petId);

    adopcionId = response.body.adopcion.id;
    });

    it('GET /api/adoptions/:id - debería devolver la adopción creada', async () => {
        const response = await request(app).get(`/api/adoptions/${adopcionId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBe(adopcionId);
    });

    it('DELETE /api/adoptions/:id - debería eliminar la adopción', async () => {
        const response = await request(app).delete(`/api/adoptions/${adopcionId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Adopción eliminada');
    });

    it('GET /api/adoptions/:id - debería devolver 404 para ID no existente', async () => {
        const response = await request(app).get(`/api/adoptions/${adopcionId}`);
        expect(response.statusCode).toBe(404);
        expect(response.body.error).toBe('Adopción no encontrada');
    });

    it('POST /api/adoptions - debería devolver 400 si faltan campos', async () => {
        const response = await request(app)
        .post('/api/adoptions')
        .send({ userId: 'soloUsuario' });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe('Datos incompletos');
    });
});
