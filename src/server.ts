// Importando o servidor para usa-lo
//import express, {Request, Response} from 'express';

// Iniciando o servidor
//const server = express();

//  Configurando a pagina principal
//server.get('/', (req: Request, res: Response) => {// -> Request- o tipo de dados que o req recebe; -> Response- o tipo de dados que o res recebe
    //  Quando acessamos um site vem junto uma serie de informacoes que ficam armazenados dentro do 'req'
    //  res: é o responsável pela resposta que o usuário vai dar ao utilizador que fez a requisição
//    res.send('Olá Mundo!');//-> Resposta da requisição
//});

//  Toda a requisição vem junto de um método: GET, POST, PUT, DELETE
// Os mais usados são: GET e POST

//              Rota Dinâmica

//  Rota dinamica eh quando basicamente temos algum dado dentro do metodo que pode mudar, mas ainda vai para a mesma pagina
/*server.get('/noticia/:slug', (req: Request, res: Response)=>{
    let slug = req.params.slug;
    res.send(`Noticia: ${slug}`);
});*/

/*server.get('/noticia/:slug', (req: Request, res: Response)=>{
    let slug: string = req.params.slug;
    res.send(`Noticia: ${slug}`);
});*/

//  site.com/voo/gru-rec
/*server.get('/voo/:origem-:destino', (req: Request, res: Response)=>{
    let { origem, destino} = req.params;

    res.send(`Procurando voos de ${origem.toUpperCase()} até ${destino.toUpperCase()}`);
});*/

//  Atribuindo uma porta ao servidor
//server.listen(80);


//                                IMPORTANDO ROTAS
//import express from 'express';

//  importando as rotas
//import mainRoutes from './routes';

//  importando rotas do painel
//import painelRoutes from './routes/painel';

//const server = express();

//  Inserindo rotas no servidor
//server.use(mainRoutes); Uma maneira de iniciar a rota
//server.use('/', mainRoutes);

//  Inserindo o painel no servidor
//server.use('/painel', painelRoutes);
//server.listen(80);


//                              CRIANDO O 404 - criando uma rota para quando nao existir rota
/*
import express, {Request, Response} from 'express';
import mainRoutes from './routes/index';

const server = express();*/

//  Primeiro ele vai tentar todas as rotas que estao ali embaixo
/*server.use(mainRoutes);

//  Quando nao encontrar nenhuma rota, vai rodar a rota abaixo
server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada!');
});

server.listen(80);*/


//                          PASTA PUBLICA E ARQUIVO ESTATICO    
//import express, {Request, Response} from "express";
//  Biblioteca do express 
//import path from 'path';
//import mainRoutes from './routes/index';

//const server = express();
//  Exibe no terminar
//console.log(path.join(__dirname, '../public'));//   tem dois parametros 1- especifica o diretorio, 2- a pasta que quero especificar

//  Pega na pasta public e transforma em paginas estaticas
//server.use(express.static(path.join(__dirname, '../public'))); // '/static' -> eh um prefixo

//server.use(mainRoutes);

/*server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!');
});*/

//server.listen(80);

//                          INSTALANDO O MUSTACHE-EXPRESS

import express, {Request, Response} from 'express';
import path from 'path';
//  Importando o item do node module 'mustache'
import mustache from 'mustache-express';
//  Importando o dotenv
import dotenv from 'dotenv';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

//  Setando alguns itens
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
// Usando o mustache
server.engine('mustache', mustache());

// Colocando o diretorio das pastas como estatica
server.use(express.static(path.join(__dirname, '../public')));

//  Habilitando pegar os dados para que sejam acessiveis dentro da rota, via POST
server.use(express.urlencoded({extended: true}))

// rotas
server.use(mainRoutes);

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!');
});

server.listen(process.env.PORT);