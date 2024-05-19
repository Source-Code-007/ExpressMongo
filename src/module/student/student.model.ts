import { Schema, model } from "mongoose";
import { IAddress, IGuardianInfo, IName, IStudent } from "./student.interface";

const nameSchema = new Schema<IName>({
   firstName: String,
   middleName: String,
   lastName: String 
})
const addressSchema = new Schema<IAddress>({
   district: {type: String, required: true},
   upazila: {type: String, required: true},
   post: {type: String, required: true},
})
const guardianInfoSchema = new Schema<IGuardianInfo>({
   name: {type: String, required: true},
   address: addressSchema,
   phone: {type: String, required: true},
})

const studentSchema = new Schema<IStudent>({
    name: nameSchema,
    age: {type: Number, required: true},
    department: {type:String, required: true},
    address: addressSchema,
    bloodGroup: {type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], required:true},
    email: String,
    guardianInfo: guardianInfoSchema,
    phone: {type:String, required:true},
    type: {type: String, enum:['Inactive', 'Active'], default: 'Inactive'}
})

export const Student = model('Student', studentSchema)