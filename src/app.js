// Ecmascript module - Habilitar desde package.json
import express from 'express';
import medicamentosRoutes from './routes/medicamentos.routes.js'; // Importar las rutas de medicamentos

const app = express();

app.use(express.json()); // Parser JSON
app.use('/api/', medicamentosRoutes); //Endpoint de la API



export default app; 