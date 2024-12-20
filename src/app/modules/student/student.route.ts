import express from 'express'
import { StudentController } from './student.controller'
const router = express.Router()

// will call ontroller functions
router.post('/create-student', StudentController.createStudent)

router.get('/', StudentController.getAllStudents)

router.get('/:studentId', StudentController.getSingleStudent)

export const StduentRoutes = router
