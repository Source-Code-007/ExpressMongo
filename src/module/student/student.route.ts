import express from 'express'
import { createStudentController, deleteAllStudentsController, deleteStudentByIdController, getAllStudentsController, getStudentByIdController,  } from './student.controller'
const router = express.Router()


router.post('/create-student', createStudentController)
router.get('/', getAllStudentsController)
router.get('/:_id', getStudentByIdController)
router.delete('/:_id', deleteStudentByIdController)
router.delete('/delete-students', deleteAllStudentsController)


export {router as studentRoute}