import {pool} from '../db.js';

// METODOS GET:
export const getAllMedicamentos = async (req, res) => {
    try {
        const querySQL = 'SELECT * FROM medicamentos';
        const [rows] = await pool.query(querySQL);
    
        if (rows.length === 0) {
            return res.status(404).json({message: 'No se encontraron medicamentos'});
        }

        res.json(rows);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const getMedicamentoById = async (req, res) => { 
    try {
        const {id} = req.params;
        const querySQL = 'SELECT * FROM medicamentos WHERE id = ?';
        const [rows] = await pool.query(querySQL, [id]);
    
        if (rows.length === 0) {
            return res.status(404).json({message: 'Medicamento no encontrado'});
        }

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const getMedicamentoByReceta = async (req, res) => {
    try {
        const {receta} = req.params;
        const querySQL = 'SELECT * FROM medicamentos WHERE receta = ?';
        const [rows] = await pool.query(querySQL, [receta]);
    
        if (rows.length === 0) {
            return res.status(404).json({message: 'Medicamento no encontrado pipipi'});
        }

        res.json(rows);

    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


export const getMedicamentoByTipo = async (req, res) => {
    try {
        const {tipo} = req.params;
        const querySQL = 'SELECT * FROM medicamentos WHERE tipo = ?';
        const [rows] = await pool.query(querySQL, [tipo]);
    
        if (rows.length === 0) {
            return res.status(404).json({message: 'Medicamento no encontrado'});
        }

        res.json(rows);

    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}



// METODO POST:

export const createMedicamento = async (req, res) => {
    try {
        const {tipo, nombre,nomcomercial,presentacion, receta, precio} = req.body;
        const querySQL = 'INSERT INTO medicamentos (tipo,nombre,nomcomercial,presentacion, receta,precio) VALUES (?, ?, ?, ?, ?, ?)';
        
        const nombreComercialValidado = nomcomercial  === '' ? null : nomcomercial; 
        if (precio <=0){
            return res.status(400).json({message: 'El precio no puede ser menor o igual a 0'});
        }

        
        


        const [result] = await pool.query(querySQL, [tipo,nombre, nombreComercialValidado,presentacion,receta,precio]);
    
        if (result.affectedRows === 0) { 
            return res.status(404).json({message: 'No se pudo crear el medicamento'});

         }
         res.status(201).json({message: 'Medicamento creado correctamente', id: result.insertId});  

    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}



