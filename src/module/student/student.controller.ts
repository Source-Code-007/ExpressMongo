import { Request, Response } from 'express'
import {
  deleteAllStudents,
  deleteStudentById,
  getAllStudents,
  getStudentById,
  insertStudentToDb,
} from './student.service'
import studentValidateSchema from './student.validate'

const createStudentController = async (req: Request, res: Response) => {
  const studentData = req.body

  try {
    const zodStudentValidateSchema = studentValidateSchema.parse(studentData)

    const result = await insertStudentToDb(zodStudentValidateSchema)
    if (result) {
      res
        .status(200)
        .send({
          success: true,
          message: 'Student insert successfully',
          data: result,
        })
    }
  } catch (error: any) {
    res
      .status(200)
      .send({ success: true, message: error.message, error: error })
  }
}

const getAllStudentsController = async (req: Request, res: Response) => {
  try {
    const result = await getAllStudents()
    if (result) {
      res
        .status(200)
        .send({
          success: true,
          message: 'Students are retrieved successfully',
          data: result,
        })
    }
  } catch (error: any) {
    res
      .status(200)
      .send({ success: true, message: error.message, error: error })
  }
}

const getStudentByIdController = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params
    const result = await getStudentById(_id)
    if (true) {
      res
        .status(200)
        .send({
          success: true,
          message: 'Student is retrieved successfully',
          data: result,
        })
    }
  } catch (error: any) {
    res
      .status(200)
      .send({ success: true, message: error.message, error: error })
  }
}

const deleteStudentByIdController = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params
    const result = await deleteStudentById(_id)
    if (true) {
      res
        .status(200)
        .send({
          success: true,
          message: 'Student is deleted successfully',
          data: result,
        })
    }
  } catch (error: any) {
    res
      .status(200)
      .send({ success: true, message: error.message, error: error })
  }
}

const deleteAllStudentsController = async (req: Request, res: Response) => {
  try {
    const deleteStudents = await deleteAllStudents()

    if (deleteStudents) {
      res
        .status(200)
        .send({
          success: true,
          message: 'Students are deleted successfully',
          data: deleteStudents,
        })
    }
  } catch (error: any) {
    res
      .status(200)
      .send({ success: true, message: error.message, error: error })
  }
}

export {
  createStudentController,
  getAllStudentsController,
  getStudentByIdController,
  deleteStudentByIdController,
  deleteAllStudentsController,
}
