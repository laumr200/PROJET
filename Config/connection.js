//Configuration de la connection a la basse de donnees 
import { Sequelize } from 'sequelize';

//Importer les informations de la base de donnees (.env)
import dotenv from 'dotenv'
const ENV = dotenv.config().parsed


//Creation de la connection
const database = new Sequelize(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASSWORD, {
    host: ENV.DB_HOST,
    dialect: ENV.DB_DIALECT
});

// try {
//     await connection.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

export default database;

