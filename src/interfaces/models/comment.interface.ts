import { Document } from "mongoose";
import IUser from "./user.interface";
import IPost from "./post.interface";

export default interface IComment extends Document{
    user:IUser['_id'];
    post:IPost['_id'];
    text:string;
    date:Date;
    likes:IUser['_id'][];   
}