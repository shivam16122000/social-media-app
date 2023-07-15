import { Document } from "mongoose";
import IPost from "./post.interface";
import IComment from "./comment.interface";

export default interface IUser extends Document {
    username:string;
    hashedPassword:string;
    email:string;
    posts: IPost['_id'][];
    comments:IComment['_id'][];
}
