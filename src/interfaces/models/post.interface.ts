import { Document } from "mongoose";
import IUser from "./user.interface";
import IComment from "./comment.interface";

export default interface IPost extends Document{
    user:IUser['_id'];
    text:string;
    date:Date;
    comments?:IComment['_id'][];
    likes?:IUser['_id'][];
}