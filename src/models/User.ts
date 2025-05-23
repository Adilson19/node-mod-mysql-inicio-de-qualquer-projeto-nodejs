import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';

//  Criando o types especifico para o usuario
interface UserInstance extends Model{
    id: number;
    name: string;
    age: number;
}
//  Ensinamos ao sequelize como rodar a tabela de usuario
export const User = sequelize.define<UserInstance>("User", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        //  Este get coloca automaticamente os nomes em maisculas
        /*get(){
            return this.getDataValue('name').toUpperCase();
        }*/
    },
    lastName:{
        type: DataTypes.STRING
    },
    //  Criando um campo virtual - eh um campo fake, nao eh necessario guardar no banco de dados
    /*fullName:{
        type: DataTypes.VIRTUAL,
        get(){
            let name: string = this.getDataValue('name');
            let lastName: string = this.getDataValue('lastName');
            return `${name} ${lastName}`;
        }
    },*/
    //  Criando um campo virtual
    /*firstLetterOfName: {
        type: DataTypes.VIRTUAL,
        get() {
            let name: string = this.getDataValue('name');
            return name.charAt(0);
        }
    },*/
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18,
        //  Este set coloca automaticamente em 18 as idades menores que 18
        set(value: number){
            if(value < 18){
                value = 18;
            }
            this.setDataValue('age', value);
        }
    }
},{
    tableName: 'users',
    timestamps: false
});

//createdAt - 
//updatedAt