import express from 'express'
import { StudentController } from './student.controller'
const router = express.Router()

// will call ontroller functions
router.post('/create-student', StudentController.createStudent)

export const StduentRoutes = router
