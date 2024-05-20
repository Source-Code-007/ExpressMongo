import { ObjectId } from "mongoose";
import { IStudent } from "./student.interface";
import { Student } from "./student.model";

const insertStudentToDb = async(student:IStudent)=>{
    // Using static method
    // const result = await Student.create(student)

    // Using instance method
    const result = new Student(student)
    result.save()

    return result
}
const getAllStudents = async()=>{
    const result = await Student.find({})
    return result
}
const getStudentById = async(_id:string)=>{
    const result = await Student.findById(_id).select({__v:0})
    return result
}
const deleteStudentById = async(_id:string)=>{
    const result = await Student.findByIdAndDelete(_id).select({__v:0})
    return result
}
const deleteAllStudents = async()=> {
    const result = await Student.deleteMany({})
    return result
}

export {insertStudentToDb, getAllStudents, getStudentById, deleteAllStudents, deleteStudentById}