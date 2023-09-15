const { Router } = require('express');
const router = Router();
const { getFormularios, postFormularios } = require('../Controller/formulario');

router.get('/registros', getFormularios);
router.post('/agregar/registro', postFormularios);

module.exports = router;

