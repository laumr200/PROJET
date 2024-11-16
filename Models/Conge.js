import { DataTypes } from 'sequelize';
import sequelize from '../Config/connection.js';


const Conge = sequelize.define('Conge', {
    date_conge: DataTypes.DATE,
    type_conge: DataTypes.STRING,
    justification: DataTypes.TEXT,
    
});


export default Conge ;
