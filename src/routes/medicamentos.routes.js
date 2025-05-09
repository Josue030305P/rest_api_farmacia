import {Router} from 'express';
import { getAllMedicamentos, getMedicamentoById, getMedicamentoByReceta, getMedicamentoByTipo, createMedicamento } from '../controllers/medicamentos.controller.js'

const router = Router();

// METODOS GET:
router.get('/medicamentos', getAllMedicamentos);
router.get('/medicamentos/:id', getMedicamentoById);
router.get('/medicamentos/receta/:receta', getMedicamentoByReceta);
router.get('/medicamentos/tipo/:tipo', getMedicamentoByTipo);



// METODOS POST:

router.post('/medicamentos', createMedicamento);



export default router;