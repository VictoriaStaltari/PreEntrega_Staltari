import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import mocksRouter from './routes/mocks.router.js';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';

dotenv.config();
const app = express()
app.use(express.json())
app.use('api/users',usersRouter)
app.use('api/pets',petsRouter)

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Conectado'))
.catch(err => console.error('Error de conexión:', err))

app.use('/api/mocks', mocksRouter)

app.listen(3000, () => console.log('Server listening in: 3000'))