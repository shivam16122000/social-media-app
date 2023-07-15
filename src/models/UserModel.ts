import mongoose,{Schema,Model} from "mongoose";
import IUser from "../interfaces/models/user.interface";

const userSchema:Schema = new Schema<IUser>({
    username: { 
        type: Schema.Types.String, 
        required: true 
    },
    hashedPassword: {
        type: Schema.Types.String, 
        required: true 
    },
    email: { 
        type: Schema.Types.String,
        required: true 
    },
    posts: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Post' 
    }],
    comments: [{
        type: Schema.Types.ObjectId, 
        ref: 'Comment' 
    }]
});

const UserModel:Model<IUser> = mongoose.model<IUser>('User',userSchema);

export default UserModel;