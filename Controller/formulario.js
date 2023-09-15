const Formulario = require('../Models/formulario');

const validarCarnet = (carnet) => {
    return carnet.length === 6 && carnet[0] === 'A' && carnet[2] === '5' && ['1', '3', '9'].includes(carnet[carnet.length - 1]);
};

const validarEdad = (fechaNacimiento) => {
    const fechaCreacion = new Date();
    const nacimiento = new Date(fechaNacimiento);
    return fechaCreacion.getFullYear() - nacimiento.getFullYear() >= 18;
};

const validarGenero = (genero) => {
    return genero === 'Masculino' || genero === 'Femenino';
};

const validarGeneroPoesia = (generoPoesia) => {
    return generoPoesia === 'Lírica' || generoPoesia === 'Épica' || generoPoesia === 'Dramática';
};

const getFormularios = async (req, res) => {
    try {
        const listaFormularios = await Formulario.find();
        res.json({
            msg: 'Lista de formularios',
            listaFormularios: listaFormularios.length !== 0 ? listaFormularios : 'No hay datos',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al obtener la lista de formularios' });
    }
};

const postFormularios = async (req, res) => {
    const { carnet, nombres, direccion, genero, telefono, fecha_nacimiento, carrera, genero_poesia } = req.body;

    if (!validarCarnet(carnet) || !validarEdad(fecha_nacimiento) || !validarGenero(genero) || !validarGeneroPoesia(genero_poesia)) {
        return res.status(400).json({ msg: 'Los datos son inválidos' });
    }

    const data = {
        carnet,
        nombres,
        direccion,
        genero,
        telefono,
        fecha_nacimiento,
        carrera,
        genero_poesia,
        fecha_creacion: new Date(),
        fecha_declamacion: new Date(),
    };

    try {
        const newForm = new Formulario(data);
        await newForm.save();
        res.json({ msg: 'Agregado con éxito', newForm });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al crear el formulario' });
    }
};

module.exports = {
    getFormularios,
    postFormularios,
};
