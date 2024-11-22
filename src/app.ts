import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { StduentRoutes } from './app/modules/student/student.route'
const app: Application = express()

// PARSER -->>
app.use(express.json())
app.use(cors())

// application routes
app.use('/api/v1/students', StduentRoutes)

const getAController = (req: Request, res: Response) => {
  const a = 10
  res.send(a)
}

// GET -->>
app.get('/')

export default app
