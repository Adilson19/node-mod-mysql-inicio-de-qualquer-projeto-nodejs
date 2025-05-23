import exp from "constants";
import { Router, Request, Response } from "express";

const router = Router();

//  Pagina Inicial do Painel
router.get('/', (req: Request, res: Response)=>{
    res.send('Home do Painel');
});
//  Pagina de Noticias
router.get('/noticias', (req: Request, res: Response)=>{
    res.send('Lista de noticias cadastradas');
});

export default router;