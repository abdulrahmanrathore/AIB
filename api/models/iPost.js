import mongoose from "mongoose";

const ImagePost = new mongoose.Schema({
    name: { type: String, required: true },
    prompt: { type: String, required: true },
    photo: { type: String, required: true }
});

const ImagePostSchema = mongoose.model('ImagePost', ImagePost);

export default ImagePostSchema;