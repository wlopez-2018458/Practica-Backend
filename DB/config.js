const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB Conectada');
    } catch (error) {
        console.error(error);
        throw new Error('Error al intentar conectar con la DB');
    }
}

module.exports = {
    dbConnection
}
