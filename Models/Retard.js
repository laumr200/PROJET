import { DataTypes } from 'sequelize';
import sequelize from '../Config/connection.js';


const Retard = sequelize.define('Retard', {
    date_retard: DataTypes.DATE,
    type_retard: DataTypes.STRING,
    justification: DataTypes.TEXT,
    
});



export default Retard ;