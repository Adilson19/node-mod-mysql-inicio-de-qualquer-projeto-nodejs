import { Request, Response } from 'express';
//  importando do sequelize uma operacao
import {Op} from 'sequelize';
//  importando as instancias (sequelize)
import {sequelize} from '../instances/pg';

import { Product } from '../models/Product';
import { User } from '../models/User';

export const home = async (req: Request, res: Response)=>{
    //  FORMAS MAIS FACEIS DE ENCONTRAR O SEU USUARIO - 5 FORMAS DIFERENTES
    /* 
        findAll() - retorna todos os elementos que normalmente formam um array
        findOne() - retorna um (1) item entao nao tem como retornar um array
        findByPk() - retorna o item de acordo a chave primaria nesse caso eh pelo ID do usuario
        findOrCreate() - tenta encontrar o usuario se nao encontrar ele cria ele
    */
    //  Testando se os setters e getters estão funcionando
    /*await User.create({
        name: 'Testador',
        age: 15
    });*/

    /*const [ usuario, created ] = await User.findOrCreate({
        where: { name: 'Adelino' },
        defaults:{
            name: 'Adelino',
            age: 26
        }
    });
    if(created){
        console.log('Usuario criado com sucesso!');
    }else{
        console.log('Achamos o usuario');
    }
    console.log("USUARIO", usuario);
    console.log("CREATED", created);*/

    //  Encontrando o item apartir da chave primaria que no exemplo eh apartir do ID
    //let usuario = await User.findByPk(2);
    //  Encontrando um unico elemento
    /*let usuario = await User.findOne({
        where: {
            age: {
                [Op.gt]: 18
            }
        }
    });*/

    //  Verificando se o usuario foi encontrado
    /*
    console.log("USUÁRIO", usuario);
    if(usuario){
        console.log(`O usuário ${usuario.name} possui ${usuario.age} anos`);
    }else{
        console.log("Usuário não encontrado.");
    }*/

    
    
    let users = await User.findAll();

    //  Segunda forma de delectar alguem
    /*let results = await User.findAll({where: {name: 'Ciclano'}});
    if(results.length > 0){
        let usuario = results[0];
        //  funcao para apagar um dado; colocamos await porque havera um tempo de espera no banco de dados
        await usuario.destroy();
    }
    let users = await User.findAll();*/

    //  Primeira forma de delectar alguem
    /*await User.destroy({
        //    Quando colocamos simplesmente uma condicao para encontrar varios  
        where: {
            age:{
                [Op.lte]:18
            }
        }
    });
    let users = await User.findAll();*/

    //                      Update DE CRUD part. 2
    /*let results= await User.findAll({ where: { id:7 } });
    //  Verificando se pegou pelo menos um item
    if(results.length > 0){
        //  Pegou o elemento
        let usuario = results[0];
        //  Alterando o usuario
        usuario.name = 'Testador Alterado';
        usuario.age++;
        //  Elemento que indica que foi alterado com sucesso, atualizando tambem no banco de dados, atraves da funcao save()
        await usuario.save();
    }
    let users = await User.findAll();*/
    
    //                      Update DE CRUD
    //  Update tem dois parametros
    //  1. Dados a serem alterados
    //  2. Condição para encontrar o(s) item(ns)
    /*await User.update({ name: 'Seu Chico', age: 56},{// Dados que vao ser alterados
        //  Funcao para achar os dados a serem alterados
        where: {
            id: 4
        }
    });
    let users = await User.findAll();*/



    //                      Create DE CRUD
    //  build + save
    /*const user = User.build({
        name: 'Beltrano'
    });
    //  codigo de conversao de nascimento para idade
    //  fiz alguma coisa
    let idade: number = 27;
    user.age = idade;
    await user.save();*/

    //  create - create nao precisa do save
    /*const user = await User.create({
        name: 'Ciclano',
        age: 39
    });
    console.log("NOME", user.name);
    console.log("AGE", user.age);*/


    //  usando um autenticate para ver se deu certo
    /*try{
        await sequelize.authenticate();//   authenticate -> testa se a conexao foi estabelecida
        console.log("Conexão estabelecida com sucesso!");
    }catch(error){
        //  se der erro
        console.log("Deu problema: ", error);
    }*/
//  exemplificando as buscas   
//let searchName: string = 'ad';

//  Consultando o banco
//  Pega todos os dados - comando findAll()
//let users = await User.findAll({//  atributos
    //  exclui outros atributos
    //attributes:{exclude:['id', 'age']}

    //  busca simplesmente os seguintes elementos
    //where: {name: 'Paulo'}
    //where: {age: 55, name: 'Paulo'}

    //  busca com operadores e, ou
    //where: {
        //  formas de procurar dados
        /*[Op.or]: [
            {age: 55},
            {age: 30}
        ]*/
       //   outra maneira
       //age: [55, 30, 90]
    //}

    /*where: {
        age:{
            [Op.gte]:18
        }
    },
    //  serve para mostrar simplesmente o numero de paginas que queremos
    offset: 2,  //    numero de elementos que vai pular
    limit: 2    //  numero de elementos que vai exibir
    /*order: [
        ['name', 'DESC']
    ],*/
     //['name']    //   ordem crescente
        //name: {
            //[Op.like]: `%${searchName}%`
            
            //  usa-se like quando se estiver a fazer buscas
            //[Op.like]: '%a%'
            
            /*  Operadores que podem ser comparados - GT = Greather Than, E = Equal, LT = Lower Than
            [Op.gt]:40, // > 40
            [Op.gte]:40, // >= 40
            [Op.lt]:40,  // <40
            [Op.lte]:40 // <= 40
            [Op.between]:[40, 100] entre 40 a 100
            [Op.in]:[30, 55] busca entre esses dois numeros
            [Op.notIn]:[30, 55] busca os que nao estao entre esses dois numeros
            */
            
        //}
    //}
//});
//console.log("USUÁRIOS: ", JSON.stringify(users));

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50){
        showOld = true;
    }
    //  O Models fica o responsavel por processar os dados de produtos
    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    //  O controller eh simplesmente o gerenciador
    res.render('pages/home', {
        name: 'Adelino',
        lastName: 'Sousa',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users //  mandando user no view
    });
};
/*
export const novoUsuario = async(req: Request, res: Response) => {
    let {name, age} = req.body;

    if(name){
        const newUser = User.build({ name });

        if(age){
            newUser.age = parseInt(age);
        }

        await newUser.save();
    }
    res.redirect('/');
}*/