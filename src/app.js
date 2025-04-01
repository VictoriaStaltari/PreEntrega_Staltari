import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import mocksRouter from './routes/mocks.router.js';


dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Conectado'))
.catch(err => console.error('Error de conexión:', err));

app.use('/api/mocks', mocksRouter);

app.listen(3000, () => console.log('Server listening in: 3000'));
