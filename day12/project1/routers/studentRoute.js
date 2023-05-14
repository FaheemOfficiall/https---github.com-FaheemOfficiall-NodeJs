import express from 'express'
import { getstudent,poststudent } from '../controllers/studentController.js'

const studentRoute = express.Router()

studentRoute.get("/",getstudent)
studentRoute.get("/getstudent",getstudent)
studentRoute.post("/poststudent",poststudent)

export default studentRoute;