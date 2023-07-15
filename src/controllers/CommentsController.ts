import express,{Router,Request,Response,NextFunction} from "express";
import IController from "../interfaces/controller.interface";
import UserModel from "../models/UserModel";
import PostModel from "../models/PostModel";
import CommentModel from "../models/CommentModel";

export default class CommentsController implements IController {
    public path:string = '/feed';
    public router: Router ;

    constructor(){
        this.router = express.Router();
        this.initializeRoutes();
    }

    private initializeRoutes(){
        
    }

    private async createComment(req:Request,res:Response,next:NextFunction){
        
    }
}