import mongoose,{Schema,Model} from "mongoose";
import IPost from "../interfaces/models/post.interface";

const postSchema:Schema = new Schema<IPost>({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    text:{
        type:Schema.Types.String,
        required: true
    },
    date:{
        type:Schema.Types.Date,
        default:Date.now
    },
    comments:[{
        type:Schema.Types.ObjectId,
        ref:'Comment'
    }],
    likes:[{
        type:Schema.Types.ObjectId,
        ref:'User'
    }]
});

const PostModel:Model<IPost> = mongoose.model<IPost>('Post',postSchema);

export default PostModel;