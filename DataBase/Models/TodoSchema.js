import { Schema } from "mongoose";
import mongoose from "mongoose";

var ToDoSchema = new Schema({
    id: Number,
    name: String,
    status: String
});

export const ToDoList = mongoose.model('ToDoList', ToDoSchema);
 