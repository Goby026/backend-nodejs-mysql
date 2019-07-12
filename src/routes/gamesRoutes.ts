import { Router } from 'express';
import { gamesController } from '../controllers/gamesController';

class GamesRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void {
        this.router.get('/', gamesController.all);
        this.router.get('/:id', gamesController.get);
        this.router.post('/', gamesController.create);
        this.router.put('/:id', gamesController.update);
        this.router.delete('/:id', gamesController.delete);
    }

}

const gamesRoutes =  new GamesRoutes();

export default gamesRoutes.router;
