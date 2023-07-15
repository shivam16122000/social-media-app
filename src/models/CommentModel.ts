import mongoose,{Schema,Model} from "mongoose";
import IComment from "../interfaces/models/comment.interface";

const commentSchema:Schema = new Schema<IComment>({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
    },
    post:{
        type:Schema.Types.ObjectId,
        ref:'Post'
    },
    text:{
        type:Schema.Types.String,
        required: true
    },
    date:{
        type:Schema.Types.Date
    },
    likes:[{
        type:Schema.Types.ObjectId,
        ref:'User'
    }]
}); 

const CommentModel:Model<IComment> = mongoose.model<IComment>('Comment',commentSchema);

export default CommentModel;