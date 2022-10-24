const { Pool } = require('pg');

const pool = new Pool({
    user: 'buencom',
    host: 'localhost',
    password: 'root',
    database: 'buencom',
    port: '5432'
});

//  const { pool } = require('../../dataConfig');

const getEntities = async (req, res) => {
    const response = await pool.query("select id, modelo->>'RAZON_SOCIAL' as razon_social, modelo->>'NUMERO_DOCUMENTO' as numero_documento from  nbc_entidades order by modelo->>'RAZON_SOCIAL'");
    res.status(200).json(response.rows);
};

const getContarctById = async (req, res) => {
    let id = parseInt(req.params.id);
    const response = await pool.query(`select nbc_sedes_contrato.id, nbc_sedes_contrato.modelo->>'DESCRIPCION_SEDE' as descripcion_sede from nbc_sedes_contrato, nbc_contratos where nbc_contratos.id = (nbc_sedes_contrato.modelo->>'ID_CONTRATO')::integer and (nbc_contratos.modelo->>'PRESTADOR_ID')::integer = ${id} order by nbc_sedes_contrato.modelo->>'DESCRIPCION_SEDE'`);
  res.json(response.rows);
};

const createUser = async (req, res) => {
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    res.json({
        message: 'User Added successfully',
        body: {
            user: { name, email }
        }
    })
};

const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [
        name,
        email,
        id
    ]);
    res.json({
        message: 'User Update successfully',
        body: {
            user: { name, email }
        }
    })
};

const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query(`DELETE FROM users where id = ${id}`);
    res.json(`User ${id} deleted Successfully`);
};

module.exports = {
    getEntities,
    getContarctById,
    createUser,
    updateUser,
    deleteUser
};