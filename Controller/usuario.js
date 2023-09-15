const Usuario = require('../Models/usuario');

const defaultUser = async () => {
    try {
        const userEncontrado = await Usuario.findOne({ user: 'usuario123' }).maxTimeMS(15000);

        if (userEncontrado) {
            console.log("El administrador ya está registrado en la DB");
        } else {
            const newUser = new Usuario({
                user: 'usuario123',
                password: 'usuario123',
                rol: 'ADMIN'
            });

            const userGuardado = await newUser.save();

            if (userGuardado) {
                console.log("El administrador se ha registrado con éxito en la DB");
            } else {
                console.log("Error al crear el administrador");
            }
        }

    } catch (error) {
        console.error("Error:", error);
        throw new Error(error);
    }
};

module.exports = {
    defaultUser
};
