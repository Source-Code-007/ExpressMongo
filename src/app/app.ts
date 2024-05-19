import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { studentRoute } from '../module/student/student.route'
const app: Application = express()

// parser
app.use(express.json())
app.use(cors())

// Router
app.use('/api/v1/students', studentRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('This is homepage')
})

// URL not found middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  next('This URL is not found!')
})

// Common error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    res.status(400).send({ success: false, message: err.message || err })
  } else {
    res.status(400).send({ success: false, message: 'Something went wrong' })
  }
})

export default app
