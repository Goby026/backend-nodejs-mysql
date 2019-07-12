/* 
*
 iniciar un proyecto: npm init --yes
 dependencias para el proyecto: npm i express morgan promise-mysql cors
 dependencias para el proyecto: npm i nodemon

 archivo de configuracion de tsc: tsc --init
 *
 */

import express, { Application } from "express";

import indexRoutes from "./routes/indexRoutes";
import gamesRoutes from "./routes/gamesRoutes";

import morgan from 'morgan';
import cors from 'cors';

class Server{

    public app : Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    public config(): void {
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());//para que el servidor pueda entender las peticiones json
        this.app.use(express.urlencoded({extended:false}));
    }

    public routes():void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/games',gamesRoutes);
    }

    public start():void {
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server on port ', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();