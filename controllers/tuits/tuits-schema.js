import mongoose from "mongoose";

const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/220px-NASA_logo.svg.png?20181013191516";
const schema = mongoose.Schema(
    {
        tuit: String,
        dislikes: {type: Number, default: 0},
        likes: {type: Number, default: 0},
        liked: {type: Boolean, default: false},
        username: {type: String, default: "NASA"},
        handle: {type: String, default: "@NASA"},
        replies: {type: Number, default: 0},
        retuits: {type: Number, default: 0},
        time: {type: String, default: "2h"},
        image: {type: String, default: defaultImage},
    }, {collection: 'tuits'}
);
export default schema;