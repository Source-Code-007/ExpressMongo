import { z } from 'zod'

const nameValidateSchema = z.object({
  firstName: z.string().min(1),
  middleName: z.string(),
  lastName: z.string().min(1),
})

const addressValidateSchema = z.object({
  district: z.string().min(1),
  upazila: z.string().min(1),
  post: z.string().min(1),
})

const guardianInfoValidateSchema = z.object({
  name: z.string().min(1),
  address: addressValidateSchema.required(),
  phone: z.string().min(1),
})

const studentValidateSchema = z.object({
  name: nameValidateSchema,
  age: z.number().int().positive().min(1),
  password: z.string().min(6).max(20),
  roll: z.number().positive().min(1),
  department: z.string().min(1),
  address: addressValidateSchema.required(),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
    message: 'Invalid blood group',
  }),
  email: z.string().email(),
  guardianInfo: guardianInfoValidateSchema.required(),
  phone: z.string().min(1),
  type: z.enum(['Inactive', 'Active'], {message: 'Invalid type'}).default('Inactive'),
})

export default studentValidateSchema
