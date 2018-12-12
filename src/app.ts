import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import * as env from 'dotenv';
import * as cors from 'cors';

import { Routes } from "./routes/routes";

class App {

    public app: express.Application;
    public router: Routes = new Routes();

    constructor() {
        this.app = express();
        this.app.use(cors());
        this.config();        
        this.router.routes(this.app);     
        this.mongoSetup();
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {useNewUrlParser: true});    
    }

    private config(): void{
        env.config({path:'./src/config/.env'});
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static('public/images'));
    }
}

export default new App().app;

