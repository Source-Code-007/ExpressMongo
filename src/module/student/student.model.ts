import { Schema, model } from "mongoose";
import { IAddress, IGuardianInfo, IName, IStudent } from "./student.interface";

const nameSchema = new Schema<IName>({
   firstName: {type:String, required: [true, 'First name is required']},
   middleName: String,
   lastName: {type: String, required: [true, 'Last name is required']} 
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
    name: {type: nameSchema, required:true},
    age: {type: Number, required: true},
    roll: {type: Number, required: [true, 'Roll is required!'], unique:true},
    department: {type:String, required: true},
    address: {type: addressSchema, required:true},
    bloodGroup: {type: String, enum: {values:['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], message: `{VALUE} is not valid. The field only accept these values: 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'`}, required:true},
    email: {type: String, required:true, unique: true},
    guardianInfo: {type:guardianInfoSchema, required:true},
    phone: {type:String, required:true},
    type: {type: String, enum:{values: ['Inactive', 'Active'], message: 'The type field can only  "Inactive" or "Active" '}, default: 'Inactive'}
})

export const Student = model('Student', studentSchema)