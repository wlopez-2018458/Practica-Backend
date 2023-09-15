require('dotenv').config();

const Server = require('./Models/server');

const servidor = new Server();
servidor.listen();


