/*
    Fazendo a conexao com o banco de dados
*/
//  importando o sequelize
import {Sequelize} from 'sequelize';
//  para acessar as variaveis de ambiente sera necessario o dotenv
import dotenv from 'dotenv';

dotenv.config();

//  exportando o sequelize - recebera muitos parametros
export const sequelize = new Sequelize(
    //  usamos as string para forcar a tipagem do process
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,
    {
        //  dizendo ao sequelize que vamos fazer uma conexao que eh do tipo mysql
        dialect: 'mysql',
        //  usamos o parsInt para que a porta entenda que recebera um numero
        port: parseInt(process.env.MYSQL_PORT as string)
    }
);