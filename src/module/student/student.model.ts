import { Schema, model } from "mongoose";
import { IStudent } from "./student.interface";

const studentSchema = new Schema<IStudent>({
    name: String,
    age: Number,
    department: String,
})

const Student = model('Student', studentSchema)