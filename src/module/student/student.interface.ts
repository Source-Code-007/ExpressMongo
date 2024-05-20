export type IName = {
  firstName: string
  middleName: string
  lastName: string
}
export type IAddress = {
  district: string
  upazila: string
  post: string
}
export type IGuardianInfo = {
  name: string
  address: IAddress
  phone: string
}
export type IBloodGroup =
  | 'A+'
  | 'A-'
  | 'B+'
  | 'B-'
  | 'AB+'
  | 'AB-'
  | 'O+'
  | 'O-'

export type IStudent = {
  name: IName
  password: string
  department: string
  roll: number
  email: string
  age: number
  phone: string
  guardianInfo: IGuardianInfo
  address: IAddress
  bloodGroup: IBloodGroup
  type: 'Active' | 'Inactive'
}
