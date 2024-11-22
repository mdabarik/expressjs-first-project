import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

// PARSER -->>
app.use(express.json())
app.use(cors())

// GET -->>
app.get('/', (req: Request, res: Response) => {
  const a: number = 10
  res.send(a)
})

export default app
