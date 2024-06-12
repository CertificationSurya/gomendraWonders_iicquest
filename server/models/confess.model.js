import mongoose, { Types } from "mongoose";
const {Schema, models, model} = mongoose

const commentSchema = new Schema({
    username: {
        type: String,
        require: true
    },

    text: {
        type: String,
        require: true,
        maxlength: 3000
    }
})

const confessSchema = new Schema({
	description: {
		type: String,
        require: true
	},

    isanonymous: {
        type: Boolean,
        require: true,
        default: false
    }, 

    like: {
        type: Number,
        default: 0
    },

    dislike: {
        type: Number,
        default: 0
    },

    comment: [
        {
            type: Types.ObjectId,
            ref: "Comments"
        }
    ]
});

const Comment = models.Comment || model("Comment", commentSchema);
const Confess = models.Confess || model("Confess", confessSchema);
export default Confess;