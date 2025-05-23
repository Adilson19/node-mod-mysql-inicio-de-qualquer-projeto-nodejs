//  Importando as
import {Router} from 'express';
//  Importacoes para o padrao MVC
import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';


//  As rotas serao criadas baseadas nesta variavel que tirou da funcao Router()
const router = Router();

router.get('/', HomeController.home);

//  Aplicando os conceitos de MVC
/*
const paginaHome = (req: Request, res: Response)=>{
    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50){
        showOld = true;
    }

    res.render('pages/home', {
        name: 'Adelino',
        lastName: 'Sousa',
        showOld,
        products: [
            {title: 'Produto X', price: 10},
            {title: 'Produto Y', price: 15},
            {title: 'Produto W', price: 20}

        ],
        frasesDoDia: []
    });
};
router.get('/', paginaHome);*/

//  Home
//router.get('/', (req: Request, res: Response)=>{
    //  Podemos declarar a variavel fora ou dentro do comando render()
    /*let user = {
        name: 'Adelino',
        age: 24
    }*/
        //              PROCEDIMENTOS FEITOS PARA EXIBIR NO MUSTACHE
        //pegar os produtos do banco de dados
        //organizar as informacoes desses produtos
        //envia para o template engine
    //  Exibição condicional no mustache usando JS
    /*
    let age: number = 15;
    let showOld: boolean = false;
    if(age > 50){
        showOld = true;
    }*/
/*
    let age: number = 15;
    let showOld: boolean = false;
    
    if(age > 50){
        showOld = true;
    }
*/
        
    //  primeiro parametro eh o view e o segundo eh o objeto que queremos enviar  
    //  so os dados postos no render eh que serao exibidos no home      
    //res.render('pages/home', {
        //  declarando as variaveis que irao diretamente ao home
    /*    name: 'Adelino',
        lastName: 'Sousa',
        showOld,
        products: [
            {title: 'Produto X', price: 10},
            {title: 'Produto Y', price: 15},
            {title: 'Produto W', price: 20}
        ],
        frasesDoDia: [
            'Alguma coisa muito legal',
            'Outra frase qualquer'
        ]
    });//   Inves de dar send vamos dar um render()
});*/

router.get('/usuario/:id/mais', UserController.addIdade);
router.get('/usuario/:id/menos', UserController.diminuirIdade);
router.get('/usuario/:id/exluir', UserController.excluir);




//  Contato
//  Aplicando o padrao MVC - Infocontroller.contato
router.get('/contato', InfoController.contato /*(req: Request, res: Response)=>{
    //res.send('Formulário de Contato');
    res.render('pages/contato');
}*/);

//  Sobre a empresa
//  Aplicando o padrao MVC - Infocontroller.sobre
router.get('/sobre', InfoController.sobre /*(req: Request, res: Response)=>{
    //res.send('Página institucional sobre a empresa');
    res.render('pages/sobre');
}*/);

//  Criando a rota para ver o que acontece
/*router.get('/noticias', (req: Request, res: Response)=>{
    res.send('Lista de notícias');
});*/

//                      RECEBENDO DADOS NA URL
router.get('/nome', UserController.nome /*(req: Request, res: Response) => {            Aplicando o MVC
    //  Pegando informacoes que estao na query string
    let nome: string = req.query.nome as string; //(as string) -> ajudando o typescript a especificar o tipo de dados que esta vindo da variavel
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
}*/);

//              OUTRA ROTA
router.get('/idade', UserController.idadeForm //(req: Request, res: Response) => {           Aplicando o MVC
    //  variavel para  mostrar idade
    //let mostrarIdade: boolean = false;
    //  idade comeca com zero
    //let idade: number = 0;
    //  condicional para pegar a idade
    /*if(req.query.ano){
        let anoNascimento: number = parseInt(req.query.ano as string);//    converte par inteiro
        let anoAtual: number = new Date().getFullYear(); // Pega o ano actual
        //  calculando a idade subtraindo o ano atual pela data de nascimento
        idade = anoAtual -anoNascimento;
        mostrarIdade = true;

    }*/
//    res.render('pages/idade');
//}
);
//  Criando uma rota para o metodo POST porque mudamos o metodo
router.post('/idade-resultado', UserController.idadeAction /*(req: Request, res: Response)=>{       Aplicando o MVC
    // O metodo post recebe todas as condicionais que estavam em get na rota idade
    let mostrarIdade: boolean = false;
    let idade: number = 0;
    //  o ano esta em body, nao em query. A informacao esta vindo de body
    if(req.body.ano){
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }
    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
}*/);
//router.post('/novoUsuario')


//  Exportando as rotas para poder usar no servidor
export default router;